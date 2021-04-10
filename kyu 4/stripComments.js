const stripComments = (s) => {
  let re1 = "/^s+/s+$/g";
  let re2 = "/s*[#;].+$/g";
  return s.replace(re1, "").replace(re2, "");
};
