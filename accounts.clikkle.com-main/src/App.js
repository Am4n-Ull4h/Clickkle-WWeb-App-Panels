import { Route, Routes,Navigate } from "react-router-dom";
import "./App.css"
import Login_1 from "./sections/login/personal/login_1/login/login";
import Login_2 from "./sections/login/personal/login_2/login/login";
import EmailAddress from "./sections/email-address/email-address";
import ForgotPassword from "./sections/forgot-password/forgot-password";
import VerifyPhoneNumber from "./sections/verify-phone-number/verify-phone-number";
import SelectAccount from "./sections/select-account/select-account";

// create account / personal / registration screen ui
import Register from "./sections/create-account/personal/registration-screen-ui/registration-screen-ui_1/register";
import PersonalDetails from "./sections/create-account/personal/registration-screen-ui/registration-screen-ui_2/personal-details/personal-details";
import ChooseMail from "./sections/create-account/personal/registration-screen-ui/registration-screen-ui_3/choose-mail/choose-mail";
import CreatePassword from "./sections/create-account/personal/registration-screen-ui/registration-screen-ui_4/create-password/create-password";
import CAPTCHA from "./sections/create-account/personal/registration-screen-ui/registration-screen-ui_5/captcha/captcha";
import EnterCode from "./sections/create-account/personal/registration-screen-ui/registration-screen-ui_6/enter-code/enter-code";
import RecoveryMail from "./sections/create-account/personal/registration-screen-ui/registration-screen-ui_7/recovery-mail/recovery-mail";
import ReviewInfo from "./sections/create-account/personal/registration-screen-ui/registration-screen-ui_8/review-info/review-info";
/* ==================================== */

// create account / personal / registration screen ui
import RegisterBusiness from "./sections/create-account/business/business-screen-ui/business-screen-ui_1/register";
import NumberOfEmployee from "./sections/create-account/business/business-screen-ui/business-screen-ui_2/number-of-emloyee";
import ContactInfo from "./sections/create-account/business/business-screen-ui/business-screen-ui_3/contact-info";
import Domain from "./sections/create-account/business/business-screen-ui/business-screen-ui_4/domain";
import DomainYes from "./sections/create-account/business/business-screen-ui/business-screen-ui_5/domain-yes";
import DomainNoFind from "./sections/create-account/business/business-screen-ui/business-screen-ui_5/domain-no-find";
import DomainNoAvailable from "./sections/create-account/business/business-screen-ui/business-screen-ui_5/domain-no-available";
import BusinessInformation from "./sections/create-account/business/business-screen-ui/business-screen-ui_6/business-information";
import BusinessContactInfo from "./sections/create-account/business/business-screen-ui/business-screen-ui_7/business-contact-info";
import SingInDetails from "./sections/create-account/business/business-screen-ui/business-screen-ui_8/sign-in-details";
import CaptchaBusiness from "./sections/create-account/business/business-screen-ui/business-screen-ui_9/captcha-business";
/* ==================================== */

/* forget mail email / personal / email recovery */
import ForgotMail_email from "./sections/forget-email/personal/email-recovery/email-recovery_1/forgot-mail-email/forgot-mail-email";
import FullName_email from "./sections/forget-email/personal/email-recovery/email-recovery_2/full-name-email/full-name-email";
import VerificationCode_email from "./sections/forget-email/personal/email-recovery/email-recovery_3/verification-code-email/verification-code-email";
import EnterCodeEmailRecovery_email from "./sections/forget-email/personal/email-recovery/email-recovery_4/enter-code-email/enter-code-email";
import SelectAccount_email from "./sections/forget-email/personal/email-recovery/email-recovery_5/select-account-email/select-account-email";
/* ==================================== */

/* forget mail phone / personal / email recovery */
import ForgotMail_phone from "./sections/forget-email/personal/phone-recovery/phone-recovery_1/forget-mail-phone/forget-mail-phone";
import FullName_phone from "./sections/forget-email/personal/phone-recovery/phone-recovery_2/full-name-phone/full-name-phone";
import VerificationCode_phone from "./sections/forget-email/personal/phone-recovery/phone-recovery_3/verification-code-phone/verification-code-phone";
import EnterCodeEmailRecovery_phone from "./sections/forget-email/personal/phone-recovery/phone-recovery_4/enter-code-phone/enter-code-phone";
import SelectAccountSignIn_phone from "./sections/forget-email/personal/phone-recovery/phone-recovery_5/select-account-phone/select-account-phone";
/* ==================================== */

/* forget password mailApp / personal / password recovery */
import ForgotPassword1_mailApp from "./sections/forget-password/personal/password-recovery/password-recovery_1/forgot-password-email/forgot-password-email";
import ForgotPassword2_mailApp from "./sections/forget-password/personal/password-recovery/password-recovery_2/forgot-password-email/forgot-password-email";

/* ==================================== */

/* forget password phone / personal / password recovery */
import ForgotPasswordPhone_1 from "./sections/forget-password/personal/phone-password-recovery/phone-password_1/forgot-password-phone_1/forgot-password-phone_1";
import ForgotPasswordPhone_2 from "./sections/forget-password/personal/phone-password-recovery/phone-password_2/forgot-password-phone_2/forgot-password-phone_2";
import ForgotPasswordPhone_3 from "./sections/forget-password/personal/phone-password-recovery/phone-password_3/forgot-password-phone_3/forgot-password-phone_3";
/* ==================================== */

/* forget password email / personal / password recovery */
import ForgotPasswordEmail_1 from "./sections/forget-password/personal/web-password-recovery/web-password_1/forgot-password-email_1/forgot-password-email_1";
import ForgotPasswordEmail_2 from "./sections/forget-password/personal/web-password-recovery/web-password_2/forgot-password-email_2/forgot-password-email_2";
/* ==================================== */

import PersonalInfo from "./New folder/pages/PersonalInfo"

import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
// import Home from "./New folder/pages/Home";

function App() {
  const theme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login_1 />} />
        <Route path="/login_2" element={<Login_2 />} />
        <Route path="/email-address" element={<EmailAddress />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-phone-number" element={<VerifyPhoneNumber />} />
        <Route path="/select-account" element={<SelectAccount />} />

        {/* User */}
        {/* <Route path="/user" element={<PersonalInfo />} />
        <Route path="/home" element={<Home />} /> */}

        {/* // create account / personal / registration screen ui */}
        <Route path="/register" element={<Register />} />
        <Route path="/personal-details" element={<PersonalDetails />} />
        <Route path="/choose-mail" element={<ChooseMail />} />
        <Route path="/create-password" element={<CreatePassword />} />
        <Route path="/captcha" element={<CAPTCHA />} />
        <Route path="/enter-code" element={<EnterCode />} />
        <Route path="/recovery-mail" element={<RecoveryMail />} />
        <Route path="/review-info" element={<ReviewInfo />} />
        {/* ==================================== */}

        {/* // create account / personal / registration screen ui */}
        <Route path="/register-business" element={<RegisterBusiness />} />
        <Route path="/number-of-employee" element={<NumberOfEmployee />} />
        <Route path="/contact-info" element={<ContactInfo />} />
        <Route path="/domain" element={<Domain />} />
        <Route path="/domain-yes" element={<DomainYes />} />
        <Route path="/domain-no-find" element={<DomainNoFind />} />
        <Route path="/domain-no-available" element={<DomainNoAvailable />} />
        <Route path="/business-information" element={<BusinessInformation />} />
        <Route
          path="/business-contact-info"
          element={<BusinessContactInfo />}
        />
        <Route path="/sign-in-details" element={<SingInDetails />} />
        <Route path="/captcha-business" element={<CaptchaBusiness />} />
        {/* ==================================== */}

        {/* forget mail email / personal / email recovery */}
        <Route path="/forgot-mail-email" element={<ForgotMail_email />} />
        <Route path="/full-name-email" element={<FullName_email />} />
        <Route
          path="/verification-code-email"
          element={<VerificationCode_email />}
        />
        <Route
          path="/enter-code-email"
          element={<EnterCodeEmailRecovery_email />}
        />
        <Route path="/select-account-email" element={<SelectAccount_email />} />
        {/* ==================================== */}

        {/* forget mail phone / personal / email recovery */}
        <Route path="/forgot-mail-phone" element={<ForgotMail_phone />} />
        <Route path="/full-name-phone" element={<FullName_phone />} />
        <Route
          path="/verification-code-phone"
          element={<VerificationCode_phone />}
        />
        <Route
          path="/enter-code-phone"
          element={<EnterCodeEmailRecovery_phone />}
        />
        <Route
          path="/select-account-phone"
          element={<SelectAccountSignIn_phone />}
        />
        {/* ==================================== */}

        {/* forget password mailApp / personal / password recovery */}
        <Route
          path="/forgot-password-mailapp-1"
          element={<ForgotPassword1_mailApp />}
        />
        <Route
          path="/forgot-password-mailapp-2"
          element={<ForgotPassword2_mailApp />}
        />
        {/* ==================================== */}

        {/* forget password phone / personal / password recovery */}
        <Route
          path="/forgot-password-phone-1"
          element={<ForgotPasswordPhone_1 />}
        />
        <Route
          path="/forgot-password-phone-2"
          element={<ForgotPasswordPhone_2 />}
        />
        <Route
          path="/forgot-password-phone-3"
          element={<ForgotPasswordPhone_3 />}
        />
        {/* ==================================== */}

        {/* forget password email / personal / password recovery */}
        <Route
          path="/account-recovery-forgot-password"
          element={<ForgotPasswordEmail_1 />}
        />
        <Route
          path="/enter-code-forgot-password"
          element={<ForgotPasswordEmail_2 />}
        />
        {/* ==================================== */}
      </Routes>
    </ThemeProvider>
  );
}

export default App;
