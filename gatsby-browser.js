/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

exports.onClientEntry = () => {
  // Add pollyfill for svg used by react-particles-js on page load
  const node = document.createElement('script')
  node.setAttribute('src', 'https://cdn.rawgit.com/progers/pathseg/master/pathseg.js')

  document.head.appendChild(node)
}
