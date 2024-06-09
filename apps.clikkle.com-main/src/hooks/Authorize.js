import React, { createContext, useContext, useEffect, useState } from 'react';
import Loading from '../components/Loading';
import { getCookie, setCookie } from '../utilities/cookies';
import axios from 'axios';
import { env } from '../utilities/function';
import { useLocation } from 'react-router-dom';

const authorizeContext = createContext();

const AuthorizationProvider = ({ children }) => {
    const [content, setContent] = useState(
        <Loading message='Please wait, logging you in...' />
    );
    const [user, setUser] = useState({});
    const location = useLocation();
    const getDomain = (url) => url.replace(/(http:\/\/|https:\/\/)/, '');

    const authorize = async (loggedIn, cb) => {
        if (loggedIn) {
            setContent(children);
        } else {
            const redirectTo =
                env('AUTHENTICATION_CLIENT') +
                '/login?redirectto=' +
                encodeURIComponent(
                    env('DOMAIN') + location.pathname + location.search
                );

            setContent(
                <Loading
                    message='Please wait, redirecting you to Clikkle Accounts'
                    redirectTo={redirectTo}
                />
            );
        }
        if (typeof cb === 'function') cb(setUser);
    };

    useEffect(() => {
        (async () => {
            try {
                const accessToken = getCookie('accessToken');

                if (!accessToken) throw new Error('');

                const hrAcessToken = getCookie('accessToken-hr');

                if (hrAcessToken) {
                    // const response = await axios.get('/hr/profile', {
                    //     headers: {
                    //         Authorization: `Bearer ${accessToken}`,
                    //     },
                    // });

                    return authorize(true, (setUser) => setUser(setUser));
                }

                const response = await axios.get(
                    `/unauth/hr-login?role=${getCookie('role')}`,
                    {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                        },
                    }
                );

                const hrToken = response.data.newToken;
                const hr = response.data.hr;

                setCookie('accessToken-hr', hrToken, {
                    domain: getDomain(env('COOKIE_DOMAIN')),
                });

                authorize(true, (setUser) => setUser(hr));
            } catch (err) {
                console.log(err);
                authorize(false);
            }
        })();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <authorizeContext.Provider value={{ authorize, setUser, user }}>
            {content}
        </authorizeContext.Provider>
    );
};

const useAuthorize = () => useContext(authorizeContext).authorize;
const useUser = () => useContext(authorizeContext).user;
const useSetUser = () => useContext(authorizeContext).setUser;

export default AuthorizationProvider;
export { useAuthorize, useUser, useSetUser };
