var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.items,
      active: this.props.active,
      direction: "" };


    this.rightClick = this.moveRight.bind(this);
    this.leftClick = this.moveLeft.bind(this);
  }

  generateItems() {
    var items = [];
    var level;
    console.log(this.state.active);
    for (var i = this.state.active - 2; i < this.state.active + 3; i++) {
      var index = i;
      if (i < 0) {
        index = this.state.items.length + i;
      } else if (i >= this.state.items.length) {
        index = i % this.state.items.length;
      }
      level = this.state.active - i;
      items.push(
      React.createElement(Item, {
        key: index,
        id: this.state.items[index],
        level: level }));


    }
    return items;
  }

  moveLeft() {
    var newActive = this.state.active;
    newActive--;
    this.setState({
      active: newActive < 0 ? this.state.items.length - 1 : newActive,
      direction: "left" });

  }

  moveRight() {
    var newActive = this.state.active;
    this.setState({
      active: (newActive + 1) % this.state.items.length,
      direction: "right" });

  }

  render() {
    return React.createElement(
    "div",
    { id: "carousel", className: "noselect" },
    React.createElement(
    "div",
    { className: "arrow arrow-left", onClick: this.leftClick },
    React.createElement("i", { className: "fi-arrow-left" })),

    React.createElement(
    ReactCSSTransitionGroup,
    {
      transitionName: this.state.direction },

    this.generateItems()),


    React.createElement(
    "div",
    { className: "arrow arrow-right", onClick: this.rightClick },
    React.createElement("i", { className: "fi-arrow-right" })));


  }}


class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      level: this.props.level };

  }

  render() {
    const className = "item level" + this.props.level;
    return React.createElement(
    "div",
    { className: className },

    React.createElement("img", {
      src: this.props.id,
      width: "100%",
      height: "100%" }));


  }}


var items = [
"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
"https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
"https://images.unsplash.com/photo-1593729383954-d24da9783be4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
"https://images.unsplash.com/photo-1593358578790-0ed541155fe9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
"https://images.unsplash.com/photo-1593756647621-c4851f556123?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
"https://images.unsplash.com/photo-1593381008273-5874bf72c908?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
"https://images.unsplash.com/photo-1593443320739-77f74939d0da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
"https://images.unsplash.com/photo-1593443320739-77f74939d0da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
"https://images.unsplash.com/photo-1593729904587-094d05173516?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
"https://images.unsplash.com/photo-1593507526118-d1ee45bee6bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"];

ReactDOM.render(
React.createElement(Carousel, { items: items, active: 0 }),
document.getElementById("app"));
