exports.onRenderBody = ({setBodyAttributes,}) => {
    // Affect the HTML that gets loaded before React here
    setBodyAttributes({
      style: {
        backgroundColor: 'red',
      },
    });
  }