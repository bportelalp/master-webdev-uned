import React, { useState } from "react";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";


const FilterRegion = (props) => {
    const [region, setRegion] = useState('all')
    const handleChange = (event) => {
        setRegion(event.target.value)
        props?.onRegionChange(event.target.value);
    }

    return (
        <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Región</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={region}
            label="Age"
            onChange={handleChange}
          >
                    <MenuItem value="all" selected>Todas</MenuItem>
                    <MenuItem value="Africa">África</MenuItem>
                    <MenuItem value="Americas">América</MenuItem>
                    <MenuItem value="Asia">Asia</MenuItem>
                    <MenuItem value="Europe">Europa</MenuItem>
                    <MenuItem value="Oceania">Oceanía</MenuItem>
          </Select>
        </FormControl>
      </Box>
    )
}



export default FilterRegion;