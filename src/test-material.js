import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Checkbox from '@mui/material/Checkbox';
import Fab from '@mui/material/Fab';
import { Add } from '@mui/icons-material';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import NativeSelect from '@mui/material/NativeSelect';
import Slider from '@mui/material/Slider';
import Switch from '@mui/material/Switch';

export default function TestMaterial(props){
	let value = 0;

	function setValue(val){
		value = val;
	}

	return (
			<div>
				<div>
					<Autocomplete 
						options={['One', 'Two', 'Three']}   
						renderInput={(params) => <TextField {...params} label="Numbers" />} 
					/>
				</div>
				<br></br>
				<div>
					<Button variant="contained">Test Button</Button>
				</div>
				<br></br>
				<div>
					<ButtonGroup variant="contained" aria-label="outlined primary button group">
						<Button>One</Button>
						<Button>Two</Button>
						<Button>Three</Button>
					</ButtonGroup>
				</div>
				<br></br>
				<div>
					<Checkbox default />
				</div>
				<br></br>
				<div>
					<Fab color="primary" aria-label="add">
						<Add />
					</Fab>
				</div>
				<br></br>
				<div>
					<FormControl>
						<FormLabel id="test">Numbers</FormLabel>
						<FormControlLabel value="1" control={<Radio />} label="1" />
						<FormControlLabel value="2" control={<Radio />} label="2" />
						<FormControlLabel value="3" control={<Radio />} label="3" />
					</FormControl>
				</div>
				<br></br>
				<div>
					<Typography component="legend">Rating</Typography>
					<Rating
						name="test"
						value={value}
						onChange={(event, newValue) => {
							setValue(newValue);
						}}
					/>
				</div>
				<br></br>
				<div>
					<FormControl>
						<InputLabel variant="standard" htmlFor="uncontrolled-native">
							Test
						</InputLabel>
						<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={1}
						label="1"
						onChange={() => {}}
						>
							<MenuItem value={1}>One</MenuItem >
							<MenuItem value={2}>Two</MenuItem >
						</Select>
					</FormControl>
				</div>
				<br></br>
				<div>
					<Slider defaultValue={30} aria-label="Test Slider" />
				</div>
				<br></br>
				<div>
					<Switch />
				</div>
				<br></br>
				<div>
					<TextField id="outlined-basic" label="Outlined" variant="outlined" />
				</div>
				<br></br>
			</div>
		);
}