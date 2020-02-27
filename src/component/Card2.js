import React, { Component } from "react";
import { render } from "react-dom";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import arrayMove from "array-move";
//----------------
const SortableItem = SortableElement(({ value }) => <li>{value}</li>);
const SortableList = SortableContainer(({ items }) => {
  return (
    <ul>
      {items.map((value, index) => (
        <SortableItem key={`item-${value}`} index={index} value={value} />
      ))}
    </ul>
  );
});
onSortEnd = ({oldIndex, newIndex}) => {
    this.setState(({items}) => ({
        items: arrayMove(items, oldIndex, newIndex),
    }));

 class SortableComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { anthems: [] };
  }
  componentDidMount() {
    var anthems = [];
    if (localStorage.getItem("personalAnthem")) {
      //load from localstorage
      var retrievedData = localStorage.getItem("personalAnthem");
      console.log(retrievedData);
      anthems = JSON.parse(retrievedData);
      this.setState({ anthems });
    }
  }

  render() {
    return (
      <Container>
        <SortableList
          shouldUseDragHandle={false}
          useDragHandle
          axis="xy"
          items={this.state.anthems}
          onSortEnd={onSortEnd}
        />
      </Container>
    );}
  };

 export default SortableComponent;