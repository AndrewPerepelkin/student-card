export function validator(data, config) {
  const errors = {};
  function validate(validateMethod, data, config) {
    let statusValidate;
    switch (validateMethod) {
      case 'isRequired':
        statusValidate = data.trim() === '';
        break;
      case 'isYaer':
        statusValidate = ((data.length !== 4) || (Number(data) > new Date().getFullYear()));
        break;
      case 'isURL':
        // eslint-disable-next-line
        const urlRegExp = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/g;
        statusValidate = !(urlRegExp.test(data));
        break;
      default:
        break;
    }
    if (statusValidate) return config.message;
  }

  for (const fieldName in data) {
    for (const validateMethod in config[fieldName]) {
      const error = validate(
        validateMethod,
        data[fieldName],
        config[fieldName][validateMethod]
      );
      if (error && !errors[fieldName]) errors[fieldName] = error;
    }
  }
  return errors;
}
