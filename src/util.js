/**
 * Created by fogmoon on 2018/5/4.
 */
import { APIError, APIErrorCode } from './actions/APIError';
import { PASSWORD_MIN_LEN, USERNAME_MAX_LEN } from './enums';

const LanguageOption = {
    EN: 'EN',
    CN: 'CN',
};

function getBrowserLang() {
    let lang = (navigator.language || navigator.userLanguage || navigator.browserLanguage);
    if (lang) {
        lang = lang.toLowerCase();
        if (lang.indexOf('zh') > -1) {
            return LanguageOption.CN;
        }
    }

    return LanguageOption.EN;
}

export function getWhitePaperLink() {
    if (LanguageOption.CN == getBrowserLang())
    {
        return "https://pan.baidu.com/s/1laWjMDFAdTmjwMgiojJ2jg";
    }
    else{
        return "https://docsend.com/view/yuhe5nc";
    }
}

export function validateUserName(username) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let email = String(username).toLowerCase();
    // validate email
    if (!re.test(email)) {
        return {
            'result': false,
            'msg': APIError[APIErrorCode.UsernameEmailNotValid]
        };
    }
    // validate username prefix length not more than 25
    let username_prefix = email.split('@')[0];
    if(username_prefix.length > USERNAME_MAX_LEN) {
        return {
            'result': false,
            'msg': APIError[APIErrorCode.UsernameTooLong]
        };
    }
    return {
        'result': true,
        'msg': ''
    };
}

export function validatePassword(password) {
    if (String(password).length < PASSWORD_MIN_LEN) {
        return {
            'result': false,
            'msg': APIError[APIErrorCode.PasswordTooShort]
        };
    }
    return {
        'result': true,
        'msg': ''
    };
}

export function validateEthAddress(address) {
    if (!/^0x[0-9a-f]{40}$/i.test(address)) {
        return {
            'result': false,
            'msg': APIError[APIErrorCode.EthAddressNotValid]
        };
    }
    return {
        'result': true,
        'msg': ''
    };
}

export function getTimeString(t) {
	const time = new Date(t);
	const monthInt = time.getMonth() + 1;
	const month = monthInt.toString().length == 1 ? '0' + monthInt : monthInt;
	const date = time.getDate().toString().length == 1 ? '0' + time.getDate() : time.getDate();
	const hours = time.getHours().toString().length == 1 ? '0' + time.getHours() : time.getHours();
	const minutes = time.getMinutes().toString().length == 1 ? '0' + time.getMinutes() : time.getMinutes();
	return `${time.getFullYear()}/${month}/${date} ${hours}:${minutes} (UTC+8:00)`;
}

export function getDiffTime() {
    // 美国加州 2018-07-01 00:00:00
    // let endDate = new Date("2018-07-01 00:00:00");
    // let end = endDate.getTime();
    // let end_time =  endDate.getTime() / 1000;
    let end_time = 1530432000;
    let curr_time = parseInt(Date.parse((new Date()).toString())/1000);
    let diff_time = parseInt(end_time-curr_time);

    if (diff_time <= 0) {
        return {
            "days": "00",
            "hours": "00",
            "minutes": "00",
            "seconds": "00",
        }
    }
    let d = '' + Math.floor(diff_time / 86400);
    if(d.length == 1)  d = "0" + d;
    let h = '' + Math.floor(diff_time % 86400 / 3600);
    if(h.length == 1)  h = "0" + h;
    let m = '' + Math.floor(diff_time / 60 % 60);
    if(m.length == 1)  m = "0" + m;
    let s = '' + Math.floor(diff_time % 60);
    if(s.length == 1)  s = "0" + s;

    return {
        "days": d,
        "hours": h,
        "minutes": m,
        "seconds": s,
    }
}