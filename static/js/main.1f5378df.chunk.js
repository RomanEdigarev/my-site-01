(this["webpackJsonpmy-site-01"]=this["webpackJsonpmy-site-01"]||[]).push([[0],[,,,,,,,,function(e,a,t){e.exports={blockDark:"Block_blockDark__1cACe",blockLight:"Block_blockLight__2LwjI",blockImg__wrapper:"Block_blockImg__wrapper__151DC",blockImg:"Block_blockImg__1rcwy",blockText__wrapper:"Block_blockText__wrapper__1sNMS",block__title:"Block_block__title__3RNq_",block__subtitle:"Block_block__subtitle__1RtBn",block__text:"Block_block__text__2CQBJ"}},function(e,a,t){e.exports={card:"Card_card__2mome",cardDark:"Card_cardDark__34a4k",cardBlue:"Card_cardBlue__X3ASv",card__name:"Card_card__name__RBm46",card__price:"Card_card__price__2qxv3",card__subtitle:"Card_card__subtitle__1u1ha",card__description:"Card_card__description__3g6YH"}},,function(e,a,t){e.exports={footer:"Footer_footer__3Mvmk",footer__container:"Footer_footer__container__2HV1d",footer__subscribe:"Footer_footer__subscribe__PVdkt",footer__subscribeTitle:"Footer_footer__subscribeTitle__3_rBx",footer__subscribeSubtitle:"Footer_footer__subscribeSubtitle__tMcdx",footer__subscribeForm:"Footer_footer__subscribeForm__3hdlc"}},function(e,a,t){e.exports={navbarMenu:"NavbarMenu_navbarMenu__1gXni",navbarMenu__items:"NavbarMenu_navbarMenu__items__3NKU1"}},,function(e,a,t){e.exports={navbarTitle__container:"NavbarTitle_navbarTitle__container__2hhvJ",navbarTitle:"NavbarTitle_navbarTitle__3ZO2I",navbarTitle__icon:"NavbarTitle_navbarTitle__icon__N-G31"}},function(e,a,t){e.exports={btn:"Button_btn__3agIz",btnForDark:"Button_btnForDark__1nzKa",btnForLight:"Button_btnForLight__2iYLz"}},function(e,a,t){e.exports={footer__social:"Social_footer__social__2N4U5",footer__socialTitle:"Social_footer__socialTitle__1eYHA",footer__socialLink:"Social_footer__socialLink__2u1Ce"}},,function(e,a,t){e.exports={navbar:"Navbar_navbar__16-t3",navbar__link:"Navbar_navbar__link__A02cl"}},,,function(e,a,t){e.exports={pricing__container:"Pricing_pricing__container__3oT3K",pricing__title:"Pricing_pricing__title__2AsYM"}},,,,function(e,a,t){e.exports={header:"Header_header__23zSf"}},,function(e,a,t){e.exports=t(38)},,,,,function(e,a,t){},,,,,,function(e,a,t){"use strict";t.r(a);var r=t(1),n=t.n(r),c=t(24),i=t.n(c),l=(t(32),t(25)),o=t.n(l),s=t(18),_=t.n(s),m=t(14),u=t.n(m),b=t(40),d=t(0),v=function(e){return n.a.createElement(d.b.Provider,{value:{color:"#fff",size:"2rem"}},n.a.createElement("div",{className:u.a.navbarTitle__container},n.a.createElement(b.a,{className:u.a.navbarTitle__icon}),n.a.createElement("h1",{className:u.a.navbarTitle},"My site-01")))},k=t(4),E=t(12),p=t.n(E),f=t(15),T=t.n(f),g=function(e){var a=e.btnText,t=e.isDark;return n.a.createElement("div",{className:"".concat(T.a.btn," + ").concat(t?T.a.btnForDark:T.a.btnForLight)},a)},D=function(e){return n.a.createElement("div",{className:p.a.navbarMenu},n.a.createElement(k.b,{to:"/my-site-01/",className:p.a.navbarMenu__items},"Home"),n.a.createElement(k.b,{to:"/services",className:p.a.navbarMenu__items},"Services"),n.a.createElement(k.b,{to:"/products",className:p.a.navbarMenu__items},"Products"),n.a.createElement(k.b,{to:"/sign-up",className:p.a.navbarMenu__items},n.a.createElement(g,{btnText:"Sign up",isDark:!0})))},N=function(e){return n.a.createElement("div",{className:_.a.navbar},n.a.createElement(k.b,{to:"/my-site-01/",className:_.a.navbar__link},n.a.createElement(v,null)),n.a.createElement(D,null))},x=function(e){return n.a.createElement("div",{className:o.a.header},n.a.createElement(N,null))},h=t(2),S=t(8),y=t.n(S),w=function(e){var a=e.isDark,t=e.blockData;return n.a.createElement("div",{className:a?y.a.blockDark:y.a.blockLight},n.a.createElement("div",{className:y.a.blockText__wrapper},n.a.createElement("div",{className:y.a.block__title},t.titleText),n.a.createElement("div",{className:y.a.block__subtitle},t.subtitleText),n.a.createElement("div",{className:y.a.block__text},t.text),n.a.createElement(g,{btnText:t.btnText,isDark:a})),n.a.createElement("div",{className:y.a.blockImg__wrapper},n.a.createElement("img",{src:t.image,alt:t.altImg,className:y.a.blockImg})))},B={titleText:"Exclusive access",subtitleText:"Unlimited Transitions with zero fees",text:"Get access to our exclusive diamond card that allows you to send unlimited transitions without\ngetting charged any fees",btnText:"Get Started",image:"svg-1.svg",altImg:"asdf"},L={titleText:"EASY SETUP",subtitleText:"Super fast and simple onboarding process",text:"Get everything set up and ready in under 10 minutes. All you need to do is add your information and you are ready to go.",btnText:"Start Now",image:"svg-7.svg",altImg:"asdf"},C={titleText:"100% SECURE",subtitleText:"Stay protected 24/7 anywhere anytime",text:"We have you covered no matter where you are located. Over 140 locations worldwide to ensure you have access anytime",btnText:"Learn More",image:"svg-5.svg",altImg:"asdf"},I={titleText:"DATA ANALYTICS",subtitleText:"Every transaction is stored on our secure cloud database",text:"Never ever have to worry again about saved reciepts. We store your data, so you can access it anytime.",btnText:"Sign Up Now",image:"svg-8.svg",altImg:"asdf"},M=t(9),F=t.n(M),A=function(e){var a=e.cardData;return n.a.createElement("div",{className:"".concat(F.a.card," ").concat(a.isDark?F.a.cardDark:F.a.cardBlue)},n.a.createElement("div",{className:F.a.card__name},a.cardName),n.a.createElement("div",{className:F.a.card__price},a.cardPrice),n.a.createElement("div",{className:F.a.card__subtitle},a.cardSubtitle),n.a.createElement("div",{className:F.a.card__description},n.a.createElement("ul",null,n.a.createElement("li",null,a.cardDescriptionOne),n.a.createElement("li",null,a.cardDescriptionTwo),n.a.createElement("li",null,a.cardDescriptionThree))),n.a.createElement("div",null,n.a.createElement(g,{isDark:a.isDark,btnText:a.btnText})))},P=t(21),U=t.n(P),Y={isDark:!1,cardName:"Start",cardPrice:"$8.99",cardSubtitle:"per month",cardDescriptionOne:"100 Transactions",cardDescriptionTwo:"2% Cash Back",cardDescriptionThree:"$10.000 Limit",btnText:"Get Started"},G={isDark:!0,cardName:"Gold",cardPrice:"$29.99",cardSubtitle:"per month",cardDescriptionOne:"1000 Transactions",cardDescriptionTwo:"3.5% Cash Back",cardDescriptionThree:"$100.000 Limit",btnText:"Get Started"},z={isDark:!1,cardName:"Diamond",cardPrice:"$99.99",cardSubtitle:"per month",cardDescriptionOne:"Unlimited Transactions",cardDescriptionTwo:"5% Cash Back",cardDescriptionThree:"Unlimited Spending",btnText:"Get Started"},H=function(e){return n.a.createElement("div",{className:U.a.pricing__container},n.a.createElement("div",{className:U.a.pricing__title},"Pricing"),n.a.createElement(A,{cardData:Y}),n.a.createElement(A,{cardData:G}),n.a.createElement(A,{cardData:z}))},O=t(11),J=t.n(O),$=t(16),R=t.n($),V=function(e){var a=e.socialData;return n.a.createElement("div",{className:R.a.footer__social},n.a.createElement("div",null,n.a.createElement("h1",{className:R.a.footer__socialTitle},a.socialTitle),n.a.createElement("ul",null,a.socialLinks.map((function(e){return n.a.createElement("li",{key:e},n.a.createElement(k.b,{className:R.a.footer__socialLink},e))})))))},K={socialTitle:"About Me",socialLinks:["How it works","Testimonials","Careers","Investors","Terms of Service"]},q={socialTitle:"Contact Us",socialLinks:["Contact","Support","Destinations","Sponsorships"]},W={socialTitle:"Videos",socialLinks:["Submit Video","Ambassadors","Agency","Influencer"]},X={socialTitle:"Social Media",socialLinks:["Instagram","Facebook","Youtube","Twitter"]},j=function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement(V,{socialData:K}),n.a.createElement(V,{socialData:q}),n.a.createElement(V,{socialData:W}),n.a.createElement(V,{socialData:X}))},Q=function(e){return n.a.createElement("div",{className:J.a.footer},n.a.createElement("div",{className:J.a.footer__container},n.a.createElement("div",{className:J.a.footer__subscribe},n.a.createElement("h2",{className:J.a.footer__subscribeTitle},"Join our exclusive membership to receive the latest news and trends"),n.a.createElement("h3",{className:J.a.footer__subscribeSubtitle},"You can unsubscribe at any time."),n.a.createElement("form",{className:J.a.footer__subscribeForm},n.a.createElement("input",{type:"text",placeholder:"You Email"}),n.a.createElement(g,{isDark:!0,btnText:"Subscribe"}))),n.a.createElement(j,null)))},Z=function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement(w,{isDark:!0,blockData:B}),n.a.createElement(w,{isDark:!1,blockData:L}),n.a.createElement(w,{isDark:!0,blockData:C}),n.a.createElement(H,null),n.a.createElement(w,{isDark:!0,blockData:I}))};var ee=function(){return n.a.createElement(k.a,null,n.a.createElement(x,null),n.a.createElement(h.a,{path:"/my-site-01/",exact:!0},n.a.createElement(Z,null)),n.a.createElement(h.a,{path:"/services"},n.a.createElement(w,{isDark:!0,blockData:C})),n.a.createElement(h.a,{path:"/products"},n.a.createElement(H,null)),n.a.createElement(h.a,{path:"/sign-up"},n.a.createElement(w,{isDark:!1,blockData:L})),n.a.createElement(Q,null))};i.a.render(n.a.createElement(ee,null),document.getElementById("root"))}],[[27,1,2]]]);
//# sourceMappingURL=main.1f5378df.chunk.js.map