/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
exports.getmiddlest = (req, res) => {

  res.status(200).send(middle(req.body.string));
 
};

function middle(str) {
  
  if(str){
  var position, length;
  
  var os="0123456789abcdefghijklmnopqrstuvwxyz"; 
  var osArray = os.split('');
  
  if ((str.length % 2) == 0) {
    position = str.length / 2 - 1;
    length = 2;
  } else {
    position = (str.length - 1) / 2;
    length = 1;
  }
  
  out = str.substring(position, position + length);
  index = (out.length===2)?osArray.indexOf(out[1]):osArray.indexOf(out)
  return "middle char[s]::"+out + " " + "set index::"+(index+1);
  }
}

