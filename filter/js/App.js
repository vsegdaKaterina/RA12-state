'use strict'

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {filters: 'All'};
  };

  render() {
    let getFilter = filter => {
      // console.log(filter)
      this.setState({filters: filter})
    };

    let returnProjects = (filter, proj) => {
      // console.log(filter, proj)
      let newArr = [];
      if (filter === 'All') return proj;
      proj.map((pr, i) => pr.category === filter ? newArr.push(pr) : '');
      return newArr;
    } 

    return (
      <div>
        <Toolbar
          filters={this.props.filters}
          selected={this.state.filters}
          onSelectFilter={(filter) => getFilter(filter)} />
        <Portfolio projects={returnProjects(this.state.filters, this.props.projects)} />
      </div>
    );
  }
}