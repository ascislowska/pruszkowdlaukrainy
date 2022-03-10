// import React from 'react';
// import {  graphql } from 'gatsby';
// import Tags from '../components/tags';

// const TagList = ({ data }) => {

//     const tags = data.allMarkdownRemark.group.map(tag => {
//         return tag.fieldValue
//       });
//       console.log(tags);
    
// return(
//     <Tags tags={tags}/>

// );
// }
// export default TagList;

// export const pageQuery = graphql`
//   query {
    
//     allMarkdownRemark(
//       filter: { fields: { contentType: { eq: "posts" } } }
//       sort: { order: DESC, fields: frontmatter___date }
//       limit: 20
//     ) {

//       group(field: frontmatter___tags) {
//         fieldValue
//         totalCount
//       }

     
//     }
//   }
// `
