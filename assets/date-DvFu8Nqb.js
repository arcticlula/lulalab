function t(e,r="long"){if(!e)return"";const n=new Date(e);return isNaN(n.getTime())?e:new Intl.DateTimeFormat("en-GB",{year:"numeric",month:r}).format(n)}export{t as f};
