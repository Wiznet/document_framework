"use strict";(self.webpackChunkwiznet_document=self.webpackChunkwiznet_document||[]).push([[70494],{48733:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>p,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var i=t(85893),r=t(11151),o=t(44996);const a={id:"asg210-running-application",title:"Running Application",date:new Date("2021-06-03T00:00:00.000Z")},p=void 0,s={id:"Product/Azure-Sphere/asg210-running-application",title:"Running Application",description:"This section describes how to run Dual-Ethernet Application on ASG210 (For the more details, please refer to Dual Ethernet Operating System Block Diagram. ASG210 Dual-Ethernet Application consists of High-level application and Real-time capable application.",source:"@site/docs/Product/Azure-Sphere/Running-application.md",sourceDirName:"Product/Azure-Sphere",slug:"/Product/Azure-Sphere/asg210-running-application",permalink:"/Product/Azure-Sphere/asg210-running-application",draft:!1,unlisted:!1,editUrl:"https://github.com/Wiznet/document_framework/tree/master/docs/Product/Azure-Sphere/Running-application.md",tags:[],version:"current",frontMatter:{id:"asg210-running-application",title:"Running Application",date:"2021-06-03T00:00:00.000Z"},sidebar:"docs",previous:{title:"Getting Started",permalink:"/Product/Azure-Sphere/asg210-getting-started"},next:{title:"Overview",permalink:"/Product/ioNIC/W55RP20/overview"}},l={},c=[{value:"Step 1. Clone repository",id:"step-1-clone-repository",level:2},{value:"Step 2. Network configuration",id:"step-2-network-configuration",level:2},{value:"Step 3. Real-time Capable Application",id:"step-3-real-time-capable-application",level:2},{value:"Set Local Network Information",id:"set-local-network-information",level:3},{value:"Set up Static network",id:"set-up-static-network",level:4},{value:"Set up DHCP network",id:"set-up-dhcp-network",level:4},{value:"Build and download",id:"build-and-download",level:3},{value:"Step 4. Set High-Level application",id:"step-4-set-high-level-application",level:2},{value:"Set up Azure IoT Hub for ASG210",id:"set-up-azure-iot-hub-for-asg210",level:3},{value:"Set Azure Cloud Parameters",id:"set-azure-cloud-parameters",level:3},{value:"Azure DPS Scope ID",id:"azure-dps-scope-id",level:4},{value:"Azure IoT Hub endpoint URL",id:"azure-iot-hub-endpoint-url",level:4},{value:"Azure Sphere Tenant ID",id:"azure-sphere-tenant-id",level:4},{value:"Set Wi-Fi Information",id:"set-wi-fi-information",level:3},{value:"Set up Public Ethernet interface",id:"set-up-public-ethernet-interface",level:3},{value:"Build and download",id:"build-and-download-1",level:3},{value:"Step 5. Check application operation",id:"step-5-check-application-operation",level:2},{value:"Send data to ASG210 from Local Network",id:"send-data-to-asg210-from-local-network",level:3},{value:"Check the data in Azure Cloud",id:"check-the-data-in-azure-cloud",level:3},{value:"Auto Switch in ASG210 Network Interface",id:"auto-switch-in-asg210-network-interface",level:3}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["This section describes how to run Dual-Ethernet Application on ASG210 (For the more details, please refer to ",(0,i.jsx)(n.a,{href:"/Product/Azure-Sphere/asg210-datasheet#dual-ethernet-operating-system-block-diagram",children:"Dual Ethernet Operating System Block Diagram"}),". ASG210 Dual-Ethernet Application consists of High-level application and Real-time capable application."]}),"\n",(0,i.jsx)(n.h2,{id:"step-1-clone-repository",children:"Step 1. Clone repository"}),"\n",(0,i.jsxs)(n.p,{children:["Clone the ",(0,i.jsx)(n.a,{href:"https://github.com/WIZnet-Azure-Sphere/ASG210_App",children:"repository"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"$ git clone https://github.com/WIZnet-Azure-Sphere/ASG210_App\n"})}),"\n",(0,i.jsx)(n.h2,{id:"step-2-network-configuration",children:"Step 2. Network configuration"}),"\n",(0,i.jsx)(n.p,{children:"This application sends local data to Azure cloud. User should configure ASG210 connection to Local network and Global network as shown below."}),"\n",(0,i.jsx)("img",{src:(0,o.ZP)("img/AzureSphere/running_app/network_config.png"),width:"750"}),"\n",(0,i.jsx)(n.h2,{id:"step-3-real-time-capable-application",children:"Step 3. Real-time Capable Application"}),"\n",(0,i.jsx)(n.h3,{id:"set-local-network-information",children:"Set Local Network Information"}),"\n",(0,i.jsx)(n.p,{children:"To run Real-time capable application, user should set Local Network information. User can select static network and DHCP network."}),"\n",(0,i.jsx)(n.h4,{id:"set-up-static-network",children:"Set up Static network"}),"\n",(0,i.jsxs)(n.p,{children:["User can set up static network in ASG210_RTApp code. Go to this directory in ASG210_App, ASG210_App/Software/ASG210_RTApp_W5500_SPI_BareMetal and open main.c. Enable ",(0,i.jsx)(n.strong,{children:"#define NETINFO_USE_MANUAL"})," and set local network information."]}),"\n",(0,i.jsx)("img",{src:(0,o.ZP)("img/AzureSphere/running_app/static_network.png"),width:"750"}),"\n",(0,i.jsx)(n.h4,{id:"set-up-dhcp-network",children:"Set up DHCP network"}),"\n",(0,i.jsxs)(n.p,{children:["User can set up DHCP network in ASG210_RTApp code. Go to this directory in ASG210_App, ASG210_App/Software/ASG210_RTApp_W5500_SPI_BareMetal and open main.c. Disable ",(0,i.jsx)(n.strong,{children:"#define NETINFO_USE_MANUAL"}),"."]}),"\n",(0,i.jsx)("img",{src:(0,o.ZP)("img/AzureSphere/running_app/dhcp_network.png"),width:"750"}),"\n",(0,i.jsx)(n.h3,{id:"build-and-download",children:"Build and download"}),"\n",(0,i.jsx)(n.p,{children:"From the Select Startup Item menum on the tool bar, select GDB Debugger (RTCore). Click Build All on Build menu. Press F5 or Click Startup Item to start the RT application with debugging.\n(Please check Azure Sphere Development mode with Azure Sphere Developer Command Prompt.)"}),"\n",(0,i.jsx)(n.p,{children:"Prepare Azure Sphere development mode:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"azsphere device enable-development\n"})}),"\n",(0,i.jsx)("img",{src:(0,o.ZP)("img/AzureSphere/running_app/rtapp_debugging.png"),width:"750"}),"\n",(0,i.jsx)("img",{src:(0,o.ZP)("img/AzureSphere/running_app/initiall_rtapp_serialdata.png"),width:"750"}),"\n",(0,i.jsx)(n.h2,{id:"step-4-set-high-level-application",children:"Step 4. Set High-Level application"}),"\n",(0,i.jsx)(n.h3,{id:"set-up-azure-iot-hub-for-asg210",children:"Set up Azure IoT Hub for ASG210"}),"\n",(0,i.jsx)(n.p,{children:"To run this application, user should set up user\u2019s own Azure IoT Hub service for ASG210. In this link, it describes how to create Azure IoT Hub and DPS service, then guides ASG210 authentication using DPS service."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/azure-sphere/app-development/setup-iot-hub",children:"https://docs.microsoft.com/en-us/azure-sphere/app-development/setup-iot-hub"})}),"\n",(0,i.jsx)(n.h3,{id:"set-azure-cloud-parameters",children:"Set Azure Cloud Parameters"}),"\n",(0,i.jsx)(n.p,{children:"To connect Azure Cloud, user must fullfil the parameters about Azure IoT Hub, DPS and Tenant ID on app_manifest.json in ASG210_HLApp."}),"\n",(0,i.jsx)("img",{src:(0,o.ZP)("img/AzureSphere/running_app/cloud_parameters.png"),width:"750"}),"\n",(0,i.jsx)(n.h4,{id:"azure-dps-scope-id",children:"Azure DPS Scope ID"}),"\n",(0,i.jsx)(n.p,{children:"Copy the ID Scope from Device Provisioning Service in Azure Portal."}),"\n",(0,i.jsx)("img",{src:(0,o.ZP)("img/AzureSphere/running_app/scope_id.png"),width:"750"}),"\n",(0,i.jsx)(n.h4,{id:"azure-iot-hub-endpoint-url",children:"Azure IoT Hub endpoint URL"}),"\n",(0,i.jsx)(n.p,{children:"Copy the IoT Hub endpoint URL from IoT Hun in Azure Portal."}),"\n",(0,i.jsx)("img",{src:(0,o.ZP)("img/AzureSphere/running_app/iothub_endpoint.png"),width:"750"}),"\n",(0,i.jsx)(n.h4,{id:"azure-sphere-tenant-id",children:"Azure Sphere Tenant ID"}),"\n",(0,i.jsx)(n.p,{children:"Copy the Azure Sphere Tenant ID from Azure Sphere Developer Command Prompt"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"azsphere tenant show-selected\n"})}),"\n",(0,i.jsx)("img",{src:(0,o.ZP)("img/AzureSphere/running_app/tenant_id.png"),width:"750"}),"\n",(0,i.jsx)(n.h3,{id:"set-wi-fi-information",children:"Set Wi-Fi Information"}),"\n",(0,i.jsxs)(n.p,{children:["ASG210 supports auto switching between Public Ethernet and Wi-Fi. Public Ethernet interface has high priority. Please refer ",(0,i.jsx)(n.a,{href:"/Product/Azure-Sphere/asg210-getting-started#configuration-wi-fi-network-settings",children:"Configuration Wi-Fi Network Settings"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"set-up-public-ethernet-interface",children:"Set up Public Ethernet interface"}),"\n",(0,i.jsx)(n.p,{children:"To enable ethernet interface for public network and communication with Azure IoT, install ethernet imagepackage by deploying a board configuration image to ASG210. The board configuration image contains information that the Azure Sphere Security Service requires to add support for Ethernet to the Azure Sphere OS."}),"\n",(0,i.jsx)(n.p,{children:"Follow these steps to enable public ethernet interface:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Create a board configuration image package"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"azsphere image-package pack-board-config \u2013-preset lan-enc28j60-isu0-int5 \u2013-output \n"})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:"Prepare ASG210 for development mode"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"azsphere device enable-development\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsx)(n.li,{children:"Sideload a board configuration image package"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"azsphere device sideload deploy --imagepackage enc28j60-isu0-int5.imagepackage\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsx)(n.li,{children:"Check the sideloaded imagepackage"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"azsphere device image list-installed\n"})}),"\n",(0,i.jsx)(n.h3,{id:"build-and-download-1",children:"Build and download"}),"\n",(0,i.jsx)(n.p,{children:"From the Select Startup Item menum on the tool bar, select GDB Debugger (HLCore). Click Build All on Build menu. Press F5 or Click Startup Item to start the HL application with debugging.\n(Please check Azure Sphere Development mode with Azure Sphere Developer Command Prompt.)"}),"\n",(0,i.jsx)(n.p,{children:"Prepare Azure Sphere development mode:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"azsphere device enable-development\n"})}),"\n",(0,i.jsx)("img",{src:(0,o.ZP)("img/AzureSphere/running_app/start_hl_app.png"),width:"750"}),"\n",(0,i.jsx)("img",{src:(0,o.ZP)("img/AzureSphere/running_app/debugging_message.png"),width:"750"}),"\n",(0,i.jsx)(n.h2,{id:"step-5-check-application-operation",children:"Step 5. Check application operation"}),"\n",(0,i.jsx)(n.h3,{id:"send-data-to-asg210-from-local-network",children:"Send data to ASG210 from Local Network"}),"\n",(0,i.jsx)(n.p,{children:"Set user device network address range and connect to ASG210 network address in Local network with TCP Client. After connection between user device and ASG210, user device can send JSON format data to transmit it to Azure Cloud through ASG210."}),"\n",(0,i.jsx)("img",{src:(0,o.ZP)("img/AzureSphere/running_app/network_address.png"),width:"750"}),"\n",(0,i.jsx)("img",{src:(0,o.ZP)("img/AzureSphere/running_app/send_json.png"),width:"750"}),"\n",(0,i.jsx)(n.h3,{id:"check-the-data-in-azure-cloud",children:"Check the data in Azure Cloud"}),"\n",(0,i.jsx)(n.p,{children:"ASG210 sends user device data to Azure Cloud. User can check the data sent from user device in Azure Cosmos DB or Storage."}),"\n",(0,i.jsx)("img",{src:(0,o.ZP)("img/AzureSphere/running_app/azure_cosmosdb.png"),width:"750"}),"\n",(0,i.jsx)(n.h3,{id:"auto-switch-in-asg210-network-interface",children:"Auto Switch in ASG210 Network Interface"}),"\n",(0,i.jsx)(n.p,{children:"This application supports auto switching network interface to guarantee Azure Cloud connection. If Ethernet connection is not working anymore, ASG210 switches from Ethernet to Wi-Fi interface and re-connects to Azure Cloud. (Vice versa works as well.)"}),"\n",(0,i.jsx)("img",{src:(0,o.ZP)("img/AzureSphere/running_app/autonetwork_switching.png"),width:"750"})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>p,a:()=>a});var i=t(67294);const r={},o=i.createContext(r);function a(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function p(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);