import React from 'react';


class Blog extends React.Component {
  render() {
    return (
      <div className="text-center container-fluid">
        <h1>Coming Soon</h1>
        <h3><a href="/">Return Home</a></h3>
      </div>
    );
  }
}

Blog.contextTypes = {
  router: React.PropTypes.object
}

export default Blog;
