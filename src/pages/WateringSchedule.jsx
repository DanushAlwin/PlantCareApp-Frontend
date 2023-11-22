import React, { Component } from 'react';

class WateringSchedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wateringDate: '', // Store the selected watering date
    };
  }

  handleDateChange = (e) => {
    this.setState({ wateringDate: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can handle the submission of the watering date,
    // for example, by saving it to a database or displaying it to the user.
    console.log('Watering scheduled for:', this.state.wateringDate);
  }

  render() {
    return (
      <div>
        <h2>Schedule Plant Watering</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Select Watering Date:
            <input
              type="date"
              value={this.state.wateringDate}
              onChange={this.handleDateChange}
            />
          </label>
          <button type="submit">Schedule</button>
        </form>
      </div>
    );
  }
}

export default WateringSchedule;

