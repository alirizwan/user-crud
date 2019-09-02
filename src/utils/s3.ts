import {S3} from 'aws-sdk';

const BUCKET = process.env.S3_BUCKET || 'UsersCrudMedia';
const s3 = new S3();

function signedUrl(data: any){
  return new Promise((resolve, reject) => {

    const key = data.username;

    s3.getSignedUrl('putObject', {
      Bucket: BUCKET,
      Key: key,
      Expires: 100
    }, (err, data) => {
      if(err){
        return reject(err);
      }

      return resolve(data);

    });
    
  });
  
}

export default {
  signedUrl,
  BUCKET
};