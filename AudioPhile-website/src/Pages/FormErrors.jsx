export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) return "Email is required";
  if (!emailRegex.test(email)) return "Please enter a valid email address";
  return "";
};

export const validateName = (name) => {
  if (!name) return "Name is required";
  if (name.length < 2) return "Name must be at least 2 characters";
  return "";
};

export const validatePhone = (phone) => {
  const phoneRegex = /^\+?[\d\s-]{10,}$/;
  if (!phone) return "Phone number is required";
  if (!phoneRegex.test(phone)) return "Please enter a valid phone number";
  return "";
};

export const validateAddress = (address) => {
  if (!address) return "Address is required";
  if (address.length < 5) return "Please enter a complete address";
  return "";
};

export const validateZipCode = (zipCode) => {
  if (!zipCode) return "ZIP code is required";
  if (!/^\d{5}(-\d{4})?$/.test(zipCode)) return "Please enter a valid ZIP code";
  return "";
};

export const validateCardNumber = (cardNumber) => {
  const cleaned = cardNumber.replace(/\s/g, "");
  if (!cleaned) return "Card number is required";
  if (!/^\d{16}$/.test(cleaned)) return "Please enter a valid 16-digit card number";
  return "";
};

export const validateExpiry = (expiry) => {
  if (!expiry) return "Expiry date is required";
  if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiry)) return "Use format MM/YY";
  return "";
};

export const validateCVV = (cvv) => {
  if (!cvv) return "CVV is required";
  if (!/^\d{3,4}$/.test(cvv)) return "CVV must be 3 or 4 digits";
  return "";
};

export const validateForm = (formData) => {
  const errors = {
    name: validateName(formData.name),
    email: validateEmail(formData.email),
    phone: validatePhone(formData.phone),
    address: validateAddress(formData.address),
    zipCode: validateZipCode(formData.zipCode),
    cardNumber: validateCardNumber(formData.cardNumber),
    expiry: validateExpiry(formData.expiry),
    cvv: validateCVV(formData.cvv),
  };

  return {
    isValid: Object.values(errors).every((error) => error === ""),
    errors,
  };
};