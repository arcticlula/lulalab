function t(e){if(!e)return"";const n=new Date(e);return isNaN(n.getTime())?e:new Intl.DateTimeFormat("en-GB",{year:"numeric",month:"long"}).format(n)}export{t as f};
