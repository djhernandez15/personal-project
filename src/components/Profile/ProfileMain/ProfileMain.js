import React, { Component } from "react";
import { connect } from "react-redux";
import { checkUser, updateUser } from "../../../ducks/reducers/userLogin";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

export class ProfileMain extends Component {
  constructor() {
    super();
    this.state = {
      newUsername: "",
      edit: false
    };
  }

  handleEdit = () => {
    this.setState({ edit: true });
  };

  //   handleLogin = () => {
  //     const { username, password } = this.state;
  //     axios.post("/api/login", { username, password }).then(user => {
  //       this.props.updateUser(user.data);
  //       this.setState({ redirect: true });
  //     });
  //   };

  handleChange = e => {
    this.setState({ newUsername: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { newUsername } = this.state;
    axios.put("/api/profile", { newUsername }).then(username => {
      this.props.updateUser(username.data);
      this.setState({ edit: false });
    });

    // axios.get("/api/loggedin").then(username => {
    //   this.props.updateUser(this.props.username);
    // });
  };
  render() {
    return (
      <div className="profile-body">
        <Card>
          <CardActionArea>
            <CardMedia />
            <CardContent>
              <Typography gutterBottom variant="h5" component="p">
                {this.props.username ? (
                  `${this.props.username}'s Profile`
                ) : (
                  <h6>Please log back in after Editing Username</h6>
                )}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Admin is working hard to add more functionality for the user.
                The user can edit their username and add items to the cart.
                Future functionality will include adding a profile picture and
                being able to checkout with Stripe.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            {/* <div className="profile-msg">{this.props.username}</div> */}
            {/* <div className="username-field">
              Username: {this.props.username}
            </div> */}
            {this.state.edit ? (
              <div>
                <input placeholder="Type here" onChange={this.handleChange} />
                <Button
                  onClick={this.handleSubmit}
                  color="primary"
                  variant="contained"
                >
                  Submit
                </Button>
              </div>
            ) : (
              <Button
                onClick={this.handleEdit}
                color="primary"
                variant="contained"
              >
                Edit Username
              </Button>
            )}
            {/* <TextField
              label="New Username"
              margin="normal"
              // variant="filled"
            />
            <Button size="small" color="secondary" variant="contained" action={this.handleEdit}>
              Edit Username
            </Button> */}
          </CardActions>
        </Card>
      </div>
    );
  }
}
const mapStateToProps = reduxState => {
  return {
    username: reduxState.userLogin.username
  };
};
export default connect(
  mapStateToProps,
  { checkUser, updateUser }
)(ProfileMain);
