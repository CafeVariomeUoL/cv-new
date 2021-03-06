import React from 'react';
import Select from '@atlaskit/select';
import { Grid, GridColumn } from '@atlaskit/page';
import Textfield from '@atlaskit/textfield';
import { mkLabel, getType, label_position } from '../../utils/utils'
import ToggleStateless from '@atlaskit/toggle';
import { getAttributes } from '../../utils/api'

export default class SliderBetweenBuilderSettings extends React.Component {

	state = {
		data: this.props.data ? this.props.data : {
			label:'',
			label_position: 'top',
			attribute:{},
			step:1,
			minVal:0,
			maxVal:100
		},
		invalid: {
			step:false,
			minVal:false,
			maxVal:false
		},
		attributes: []
	}


	componentDidMount() {
	    getAttributes(this.props.settings_id,
	    	(result) => {
	          this.setState({
	            attributes: result.filter(e => getType(e.attribute) == 'int' || getType(e.attribute) == 'float').map(e => {return {label:mkLabel(e.attribute), value:e.attribute}})
	          });
	        },
	        (error) => {
	          this.setState({
	            error: error
	          });
	        }
	    )
	  }


	handleChange = prop_name => e =>  {
		const newData = {...this.state.data};
		const newInvalid = {...this.state.invalid};
		if (prop_name === 'attribute' || prop_name === 'label_position'){
			newData[prop_name] = e.value;
		}
		else if (prop_name === 'label'){
			newData[prop_name] = e.target.value;
		} else if(this.state.data.attribute !== null) {
			if (getType(this.state.data.attribute) === "int")
				newData[prop_name] = parseInt(e.target.value);
			else if (getType(this.state.data.attribute) === "float")
				newData[prop_name] = parseFloat(e.target.value);
			newInvalid[prop_name] = isNaN(newData[prop_name]) && !(newData[prop_name] = '')
		}
    	this.setState({data: newData, invalid: newInvalid});
    	this.props.setData(newData);
	}


	
	render() {
		return (
		  <div>
		  <Grid>
		  <GridColumn medium={5}>
		  <h5 style={{paddingBottom: '0.5em'}}>Attribute:</h5>
          <Select
            className="single-select"
          	classNamePrefix="react-select"
          	menuPortalTarget={document.body}
            styles={{
                  menuPortal: base => ({
                    ...base,
                    zIndex: 9999,
                  }),
                }}
            options={this.state.attributes}
            defaultValue={{label:mkLabel(this.state.data.attribute), value:this.state.data.attribute}}
            onChange={this.handleChange('attribute')} 
          />
		    </GridColumn>
		  	<GridColumn medium={4}>
		  	<h5 style={{paddingBottom: '0.5em'}}>Label:</h5>
		  	<Textfield
		      name="label"
		      defaultValue={this.state.data.label}
		      onChange={this.handleChange('label')} 
		    />
		  </GridColumn>

		  <GridColumn>
		  <h5 style={{paddingBottom: '0.5em'}}>Label position:</h5>
          <Select
            className="single-select"
          	classNamePrefix="react-select"
            options={label_position}
            menuPortalTarget={document.body}
            styles={{
                  menuPortal: base => ({
                    ...base,
                    zIndex: 9999,
                  }),
                }}
            defaultValue={this.state.data.label_position === 'top' ? label_position[0] : label_position[1]}
            onChange={this.handleChange('label_position')} 
          />
		    </GridColumn>

		  </Grid>
		  <div style={{paddingTop: '1.5em'}}>
		  <Grid >
		  	<GridColumn medium={4}>
		  	<h5 style={{paddingBottom: '0.5em'}}>Min Value:</h5>
		  	<Textfield
		      name="label"
  		      isInvalid={this.state.invalid.minVal}
		      defaultValue={this.state.data.minVal}
		      onChange={this.handleChange('minVal')} 
		    />
		  	</GridColumn>
		    <GridColumn medium={4}>
		  	<h5 style={{paddingBottom: '0.5em'}}>Max Value:</h5>
		  	<Textfield
		      name="label"
  		      isInvalid={this.state.invalid.maxVal}
		      defaultValue={this.state.data.maxVal}
		      onChange={this.handleChange('maxVal')} 
		    />
		    </GridColumn>
		    <GridColumn medium={3}>
		    <h5 style={{paddingBottom: '0.5em'}}>Step:</h5>
		  	<Textfield
		      name="label"
		      isInvalid={this.state.invalid.step}
		      defaultValue={this.state.data.step}
		      onChange={this.handleChange('step')} 
		    />
		  	</GridColumn>
		  </Grid>
		  </div>
		  </div>
		);
	}
}
