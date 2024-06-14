import { Box, TextField } from "@mui/material";
import Text from "../Text/Text";

const InputFieldComponent = ({
    label,
    type = "text",
    placeholder = "",
    width = "100%",
    name,
    onChange,
    required = false,
    value = "",
    sx
}) => {
    return (
        <Box>
            {label && (
                <Text variant="body2" my={1} >
                    {label} {required && <span style={{ color: "red" }}>*</span>}
                </Text>
            )}
            <TextField
                value={value}
                onChange={onChange}
                type={type}
                name={name}
                placeholder={placeholder}
                fullWidth
                sx={{ width: width, ...sx }}
            />
        </Box>
    );
};

export default InputFieldComponent;
