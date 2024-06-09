import { createContext, useContext, useMemo, useRef } from 'react';
import { Card, FormControl, IconButton, Popover } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';
import TuneIcon from '@mui/icons-material/Tune';
import { useMenu } from './../../hooks/useMenu';
import {
    IconWrapperLeft,
    IconWrapperRight,
    SearchWrapper,
    StyledInputBase,
} from './styles/searchbar';

const searchContext = createContext();

const SearchBar = () => {
    const { anchorEl: anchorElFilter, openMenu: opneFilter, closeMenu: closeFilter } = useMenu();
    const handlers = useContext(searchContext);

    const onChange = handlers.getProp('onChange');
    const config = handlers.getProp('config');
    const defaultValue = handlers.getProp('defaultValue');
    const pageName = handlers.getProp('pageName');
    const shouldRender = onChange || config || defaultValue;

    return (
        <React.Fragment>
            <SearchWrapper>
                <IconWrapperLeft>
                    <SearchIcon />
                </IconWrapperLeft>
                <FormControl fullWidth>
                    {shouldRender && (
                        <StyledInputBase
                            sx={{
                                flex: 1,
                            }}
                            onChange={onChange}
                            defaultValue={defaultValue}
                            placeholder={pageName ? `Search in ${pageName}` : 'Search...'}
                        />
                    )}
                </FormControl>
                <IconWrapperRight>
                    <IconButton
                        sx={{
                            background: 'none',
                            display: { xs: 'none', md: 'inline-flex' },
                        }}
                        onClick={opneFilter}>
                        <TuneIcon />
                    </IconButton>
                </IconWrapperRight>
            </SearchWrapper>

            <Popover
                open={Boolean(anchorElFilter)}
                anchorEl={anchorElFilter}
                onClose={closeFilter}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}>
                <Card
                    sx={{
                        p: 2.5,
                        minWidth: '669px',
                    }}>
                    {config && React.cloneElement(config, { closeFilter })}
                </Card>
            </Popover>
        </React.Fragment>
    );
};

function useSearch(config = {}) {
    const handlers = useContext(searchContext);

    Object.keys(config).forEach(key => handlers.addProp(key, config[key]));
}

function SearchProvider(props) {
    const { children } = props;
    const childProps = useRef({});

    const handlers = useMemo(
        () => ({
            addProp: function (name, value) {
                childProps.current[name] = value;
            },
            getProp: function (name) {
                return childProps.current[name];
            },
        }),
        [childProps]
    );

    return <searchContext.Provider value={handlers}>{children}</searchContext.Provider>;
}

export default useSearch;
export { SearchBar, SearchProvider };
