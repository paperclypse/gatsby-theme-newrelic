import React from 'react';
import PropTypes from 'prop-types';
import Terser from 'terser';

const generateScript = ({ writeKey }) => `
(function(writeKey) {
  Tessen.load(["Segment", "NewRelic"], {
    Segment: {
      identifiable: true,
      writeKey: writeKey
    }
  })

  Tessen.identify({})
})('${writeKey}')
`;

const TessenHydrationScriptTag = ({ tessenOptions }) => {
  const { minify } = tessenOptions;

  const tessenScript = generateScript(tessenOptions);

  return (
    <script
      dangerouslySetInnerHTML={{
        __html: minify ? Terser.minify(tessenScript).code || '' : tessenScript,
      }}
    />
  );
};

TessenHydrationScriptTag.propTypes = {
  tessenOptions: PropTypes.shape({
    minify: PropTypes.bool.isRequired,
    writeKey: PropTypes.string,
  }).isRequired,
};

export default TessenHydrationScriptTag;
