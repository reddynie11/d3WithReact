import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 200,
    },
    selectEmptSelectComponenty: {
        marginTop: theme.spacing(2),
    },
}));

const SelectComponent = (props) => {
    const classes = useStyles();
    const [selected, setSelected] = React.useState('');

    const handleChange = (e) => {
        props.history.push(`/${e.target.value}`);
        setSelected(e.target.value)

    };
    return (
        <Container maxWidth="md"  >
            <FormControl variant="outlined" className={classes.formControl} style={{ marginTop: 20 }}>
                <InputLabel id="demo-simple-select-outlined-label">Select</InputLabel>
                <Select
                    labelId="input-select"
                    id="input-select"
                    value={selected}
                    onChange={handleChange}
                    label="Select"
                >
                    <MenuItem value={""}>None</MenuItem>
                    <MenuItem value={"positive"}>Positive</MenuItem>
                    <MenuItem value={"recovered"}>Recoverd</MenuItem>
                    <MenuItem value={"death"}>Deaths</MenuItem>
                </Select>
            </FormControl>

        </Container>

    );
}
export default SelectComponent;