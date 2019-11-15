def get_median(request):
    """Responds to any HTTP request.
    Args:
        request (flask.Request): HTTP request object.
    Returns:
        The response text or any set of values that can be turned into a
        Response object using
        `make_response <http://flask.pocoo.org/docs/1.0/api/#flask.Flask.make_response>`.
    """
    request_json = request.get_json()
    if request.args and 'string' in request.args:
        return middle(request.args.get('string'))
    elif request_json and 'string' in request_json:
        return middle(request_json['string'])
    else:
        return f'-1'
    
    
    
def middle(stri):
    position = 0
    length = 0

    os = "0123456789abcdefghijklmnopqrstuvwxyz"
   

    if len(stri) % 2 == 0:
        position = len(stri) / 2 - 1
        length = 2
    else:
        position = (len(stri) - 1) / 2
        length = 1

    out = stri[int(position):int(position) + int(length)]

    x = os.split().index(out) if len(out) == 2 else os.index(out)
    
    return  "middle char[s]::" + out + " " + "set index::" + str(x + 1)
