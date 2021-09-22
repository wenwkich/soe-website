export const escapeJSON = (message) => {
  const escapedJSON = message
      .replace(/[\\]/g, '\\\\')
      // eslint-disable-next-line
      .replace(/[\"]/g, '\\\"')
      // eslint-disable-next-line
      .replace(/[\/]/g, '\\/')
      .replace(/[\b]/g, '\\b')
      .replace(/[\f]/g, '\\f')
      .replace(/[\n]/g, '\\n')
      .replace(/[\r]/g, '\\r')
      .replace(/[\t]/g, '\\t');
  return escapedJSON;
}