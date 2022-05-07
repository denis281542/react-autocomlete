export const isPhone = phone => {
    return (/\+7\d{3}\d{3}\d{2}\d{2}/.test(phone))
}
export const isEmail = email => {
    return (/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(email))
}
export const isName = name => {
    return name.length >= 2
}