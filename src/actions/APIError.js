import { i18n, Language } from '../i18n';

// align with server side
export const APIErrorCode = {
    // general
    UnexpectedError: 1000,
    TransactionUnexpectedError: 1001,
    NotProvideAddress: 1002,
    AddressError: 1003,
    // bot/telegram_verify/
    NotProvideTelegramCode: 2001,
    NotProvideTelegramId: 2002,
    AccountAlreadyVerified: 2003,
    TelegramAlreadyVerified: 2004,
    NotFoundAccountUseTelegramCode: 2005,
    // POST account/register/
    UsernameNotProvide: 3000,
    PasswordNotProvide: 3001,
    UsernameEmailNotValid: 3002,
    UsernameTooLong: 3003,
    PasswordTooShort: 3004,
    UsernameAlreadyExisted: 3005,
    EthAddressNotProvide: 3006,
    EthAddressNotValid: 3007,
    EthAddressAlreadyExisted: 3008,
    // POST account/login/
    UserNotRegistered: 4000,
    UserLoginInvalid: 4001,
    UserTokenNotExisted: 4002,
    // POST account/bind_bct/
    BitcointalkUsernameNotProvide: 5000,
    BitcointalkUsernameAlreadyBind: 5001,
    // POST account/bounty_task_claim/
    BountyTaskNotExisted: 5002,
    BountyTaskRecordNotExisted: 5003,
    CannotClaimBountyTask: 5004,
    UnknownBountyTask: 5005,
    PostNumberNotProvide: 5006,
    PostNumberNotValid: 5007,
};

export const APIError = {
    // general
    [APIErrorCode.UnexpectedError]: i18n.get(Language.UNEXPECTED_ERROR),
    [APIErrorCode.TransactionUnexpectedError]: i18n.get(Language.TRANSACTION_UNEXPECTED_ERROR),
    [APIErrorCode.NotProvideAddress]: i18n.get(Language.NOT_PROVIDE_ADDRESS),
    [APIErrorCode.AddressError]: i18n.get(Language.ADDRESS_ERROR),
    // bot/telegram_verify/
    [APIErrorCode.NotProvideTelegramCode]: i18n.get(Language.NOT_PROVIDE_TELEGRAM_CODE),
    [APIErrorCode.NotProvideTelegramId]: i18n.get(Language.NOT_PROVIDE_TELEGRAM_ID),
    [APIErrorCode.AccountAlreadyVerified]: i18n.get(Language.ACCOUNT_ALREADY_VERIFIED),
    [APIErrorCode.TelegramAlreadyVerified]: i18n.get(Language.TELEGRAM_ALREADY_VERIFIED),
    [APIErrorCode.NotFoundAccountUseTelegramCode]: i18n.get(Language.NOT_COUNT_ACCOUNT_USER_TELEGRAM_CODE),
    // POST account/register/
    [APIErrorCode.UsernameNotProvide]: i18n.get(Language.USERNAME_NOT_PROVIDE),
    [APIErrorCode.PasswordNotProvide]: i18n.get(Language.PASSWORD_NOT_PROVIDE),
    [APIErrorCode.UsernameEmailNotValid]: i18n.get(Language.USERNAME_EMAIL_NOT_VALID),
    [APIErrorCode.UsernameTooLong]: i18n.get(Language.USERNAME_TOO_LONG),
    [APIErrorCode.PasswordTooShort]: i18n.get(Language.PASSWORD_TOO_SHORT),
    [APIErrorCode.UsernameAlreadyExisted]: i18n.get(Language.USERNAME_ALREADY_EXISTED),
    [APIErrorCode.EthAddressNotProvide]: i18n.get(Language.ETH_ADDRESS_NOT_PROVIDE),
    [APIErrorCode.EthAddressNotValid]: i18n.get(Language.ETH_ADDRESS_NOT_VALID),
    [APIErrorCode.EthAddressAlreadyExisted]: i18n.get(Language.ETH_ADDRESS_ALREADY_EXISTED),
    // POST account/login/
    [APIErrorCode.UserNotRegistered]: i18n.get(Language.USER_NOT_REGISTERED),
    [APIErrorCode.UserLoginInvalid]: i18n.get(Language.USER_LOGIN_INVALID),
    [APIErrorCode.UserTokenNotExisted]: i18n.get(Language.USER_TOKEN_NOT_EXISTED),
    // POST account/bind_bct/
    [APIErrorCode.BitcointalkUsernameNotProvide]: i18n.get(Language.BITCOINTALK_USERNAME_NOT_PROVIDE),
    [APIErrorCode.BitcointalkUsernameAlreadyBind]: i18n.get(Language.BITCOINTALK_USERNAME_ALREADY_BIND),
    // POST account/bounty_task_claim/
    [APIErrorCode.BountyTaskNotExisted]: i18n.get(Language.BOUNTY_TASK_NOT_EXISTED),
    [APIErrorCode.BountyTaskRecordNotExisted]: i18n.get(Language.BOUNTY_TASK_RECORD_NOT_EXISTED),
    [APIErrorCode.CannotClaimBountyTask]: i18n.get(Language.CANNOT_CLAIM_BOUNTY_TASK),
    [APIErrorCode.UnknownBountyTask]: i18n.get(Language.UNKNOWN_BOUNTY_TASK),
    [APIErrorCode.PostNumberNotProvide]: i18n.get(Language.POST_NUMBER_NOT_PROVIDE),
    [APIErrorCode.PostNumberNotValid]: i18n.get(Language.POST_NUMBER_NOT_VALID),
};
