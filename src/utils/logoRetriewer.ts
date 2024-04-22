export const logoRetriever = (logo: string) => {
    let carrierLogo = "";
    switch (logo) {
      case "TK":
        carrierLogo = "./turkish.png";
        break;
      case "S7":
        carrierLogo = "./s7.png";
        break;
      case "SU":
        carrierLogo = "./aeroflot.png";
        break;
      case "BA":
        carrierLogo = "./british.png";
        break;
    }
    return carrierLogo;
  };