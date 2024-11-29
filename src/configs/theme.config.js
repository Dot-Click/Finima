import {
  createTheme,
  Button,
  Checkbox,
  InputBase,
  NavLink,
  NumberInput,
  PasswordInput,
  Select,
  TextInput,
} from "@mantine/core";

export const globalInputStyle = {
  defaultProps: {
    variant: "default",
    styles: {
      label: {
        color: "#242622",
        fontFamily: "Outfit",
      },
      input: {
        backgroundColor: "#ffffff",
        border: "1px solid #CECDCB",
        fontSize: "16px",
        height: "45px",
        borderRadius: "6px",
      },

      wrapper: {
        marginTop: "0",
      },
      description: {
        display: "inline",
        marginLeft: "10px",
      },
    },
  },
};
const globalSelectStyle = {
  defaultProps: {
    variant: "filled",
    styles: {
      label: {
        color: "#141B43",
      },
      input: {
        backgroundColor: "#F6F6F6",
        border: "1px solid #F6F5F5",
        // fontFamily: outfit.style.fontFamily,
        fontSize: "16px",
        height: "45px",
        borderRadius: "6px",
      },
      wrapper: {
        marginTop: "0",
      },
      description: {
        display: "inline",
        marginLeft: "10px",
      },
    },
  },
};
const globalNavLinkStyle = {
  defaultProps: {
    variant: "subtle",
    color: "teal",
    styles: {
      label: {
        color: "#909FAF",
        fontSize: "15px",
        // fontFamily: outfit.style.fontFamily,
      },
    },
  },
};
const globalButtonStyle = {
  defaultProps: {
    radius: "50rem",
    variant: "filled",
    color: "#242622",
    styles: {
      label: {
        color: "#ffffff",
        fontSize: "16px",
      },
    },
  },
};
const globalCheckBoxStyle = {
  defaultProps: {
    variant: "filled",
    color: "#242622",
    styles: {
      label: {
        color: "#242622",
        fontSize: "16px",
        fontFamily: "Outfit",
      },
    },
  },
};
export const theme = createTheme({
  components: {
    TextInput: TextInput?.extend(globalInputStyle),
    InputBase: InputBase?.extend(globalInputStyle),
    NumberInput: NumberInput?.extend(globalInputStyle),
    // DateInput: DateInput?.extend(globalInputStyle),
    PasswordInput: PasswordInput?.extend(globalInputStyle),
    NavLink: NavLink?.extend(globalNavLinkStyle),
    Select: Select?.extend(globalSelectStyle),
    Button: Button?.extend(globalButtonStyle),
    Checkbox: Checkbox?.extend(globalCheckBoxStyle),
  },
  //   headings: outfit,
  // fontFamily: outfit.style.fontFamily
});
