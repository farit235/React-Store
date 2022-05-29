export const checkLength = (value) => {
  if (value && value.length < 3) {
    return "Too short";
  }
  return undefined;
};

const validateEmail = (value) => {
  let re =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  return re.test(String(value).toLowerCase());
};

const validatePhone = (value) => {
  let re = /^((\+7|7|8)+([0-9]){10})$/;
  return re.test(String(value));
};

export const checkEmail = (value) => {
  if (!validateEmail(value)) {
    return "Not correct e-mail";
  }
  return undefined;
};

export const checkPhone = (value) => {
  if (!validatePhone(value)) {
    return "Not correct phone";
  }
  return undefined;
};
