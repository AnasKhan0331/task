import { Box, MenuItem, Select } from '@mui/material';
import Text from '../Text/Text';

const SelectFieldComponent = ({
    label,
    options,
    value,
    onChange,
    name,
    placeholder,
    required = false,
    sx
}) => {
    return (
        <Box sx={sx}>
            {label && (
                <Text variant="body2" my={1} >
                    {label} {required && <span style={{ color: "red" }}>*</span>}
                </Text>
            )}
            <Select
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                fullWidth
                required
                displayEmpty
            >
                {options?.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </Select>
        </Box>
    );
};

export default SelectFieldComponent;
