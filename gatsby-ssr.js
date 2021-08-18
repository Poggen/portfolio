const React = require("react")
const Layout = require("./src/components/layout")

exports.onRenderBody = ({ setBodyAttributes }) => {
    setBodyAttributes({
        className: "body-bg",
    })
}