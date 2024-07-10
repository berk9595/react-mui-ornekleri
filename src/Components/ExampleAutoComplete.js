import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox() {
    const [value, setValue] = React.useState(options[0]);
    const [inputValue, setInputValue] = React.useState('');

    return (
        <div>
            <div>{`value: ${value !== null ? `'${value}'` : 'null'}`}</div>
            <div>{`inputValue: '${inputValue}'`}</div>
            <br />
            <Autocomplete
                slotProps={{
                    paper: {
                        sx: {
                            p: 1, bgcolor: 'red',
                            '& .MuiAutocomplete-listbox': { bgcolor: 'orange', p: 1 },
                            '& .MuiAutocomplete-option[aria-selected="true"]': { bgcolor: 'blue' },
                            '& .MuiAutocomplete-option[aria-selected="true"].Mui-focused': { bgcolor: 'blue' }
                        }
                    }
                }}
                open={true}
                value={value}
                onChange={(event, newValue) => {
                    console.log('newValue', newValue)
                    setValue(newValue);
                }}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                }}
                id="controllable-states-demo"
                options={options}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField variant='filled' sx={{ bgcolor: 'pink' }} {...params} label="Controllable" />}
            />
        </div>
    );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const options = ['Option 1', 'Option 2'];
