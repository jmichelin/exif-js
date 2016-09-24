/**
 * Created by jmichelin on 9/24/16.
 */
var ExifImage = require('exif').ExifImage;

try {
  new ExifImage({ image : 'has_geo_metadata.jpg' }, function (error, exifData) {
    if (error)
      console.log('Error: '+error.message);
    else
      console.log(exifData); // Do something with your data!
  });
} catch (error) {
  console.log('Error: ' + error.message);
}