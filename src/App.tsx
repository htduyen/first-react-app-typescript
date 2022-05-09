import React from 'react';
import './App.css';
import UserList from './components/UserList';


function App() {
  return (
    <React.Fragment>
      <div className="container">
        <div className="grid">
          <div className="row">
            <div className="col">
              <div className="h3 fw-bold text-success">App Component</div>
              <p className="fst-italic">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati explicabo sapiente eligendi omnis natus dicta
                dignissimos veritatis consectetur, accusamus perspiciatis totam
                illum at soluta cupiditate quo, commodi voluptatem assumenda
                dolore!
              </p>
              <button className="btn btn-success btn-sm">
                <i className="fa fa-book" /> Read me
              </button>
            </div>

            <div className="row">
              <div className="col">
                <UserList/>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
