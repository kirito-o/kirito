let blacklist=['����������','�㶫������','�㽭������','ɽ��������','���չ�����','���Ϲ�����','����Ƶ','���sao','�������ս','���Ϻ��','�Ƽ���ѧ','������','NathanRich�������','ǧ������']

let body = $response.body
body=JSON.parse(body)
body['data'].forEach((element, index)=> {
   if(blacklist.includes(element['right_desc_1'])||element["card_type"] !== "small_cover_v5"){ 
         body['data'].splice(index,1)  
    }
})
body=JSON.stringify(body)
$done({body})