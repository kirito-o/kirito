//Customize blacklist
let blacklist=['����������','�㶫������','�㽭������','ɽ��������','���չ�����','���Ϲ�����','����Ƶ','���sao','�������ս','���Ϻ��','�Ƽ���ѧ','������','NathanRich�������','ǧ������']

let body = $response.body
body=JSON.parse(body)
body['data'].forEach((element, index)=> {
   if(blacklist.includes(element['name'])){ 
         body['data'].splice(index,1)  
    }
})
body=JSON.stringify(body)
$done({body})