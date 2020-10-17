import React, { Component } from "react";
import { connect } from "react-redux";
import { defaultState } from "./actions/defaultState";
import "./App.css";
import logo from './icon.png';
import overview from './overview.png';
import bar from './bar.png';
import { Graph, Product, Table, Reviews } from "./components";

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      show:false,
      loading: true
    }
  }
  componentDidMount() {
    setTimeout(()=>{
      this.props.defaultState();
      this.setState({loading:false});
    },500);
  }
  render() {
    const { custom } = this.props;
    const isLoaded = Object.keys(custom||{}).length !== 0;
    const { title, image, subtitle, brand, tags, sales } = custom;
    const handleShowReview = () => this.setState({show:true});
    const handleShowSales = () => this.setState({show: false});
  
    return (
      <div className="App">
        <header className="App-header">
          <img id="image-resize" src={logo} alt="Blender" />
        </header>
        <main>
          {isLoaded && !this.state.loading? (
            <>
              <section className="App-side">
                <Product
                  title={title}
                  image={image}
                  subtitle={subtitle}
                  brand={brand}
                  tags={tags}
                />
                <ul className="App-links">
                  <li onClick={handleShowReview}>
                    <img className={"image-pill"} src={overview} alt="Overview" />
                    <span className="link-span"> OVERVIEW</span>
                  </li>
                  <li onClick={handleShowSales}>
                    <img className={"image-pill"} src={bar} alt="Bar" />
                    <span className="link-span"> SALES</span>
                  </li>
                </ul>
              </section>
              {this.state.show && <section className="App-main">
                <Reviews product={custom}/>
              </section>}
              {!this.state.show && <section className="App-main">
                <Graph sales={sales} />
                <Table sales={sales} />
              </section>}
            </>
          ) : null}
        </main>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  defaultState: () => dispatch(defaultState()),
});

const mapStateToProps = (state) => ({
  custom: state.custom,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);