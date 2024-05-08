import React from "react";
import { useState } from "react";

import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const Bank = [
    {
        logo: "https://i.pinimg.com/736x/02/31/87/023187a2f2dc47bbdc809b43c7667b3a.jpg",
        name: "ธนาคารไทยพาณิชย์",
    },
    {
        logo: "https://www.kasikornbank.com/SiteCollectionDocuments/about/img/logo/logo.png",
        name: "ธนาคารกสิกรไทย",
    },
    {
        logo: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYSEhgRERIZGRgZGBgYGBkcHBgcGBocGBocHR0eGRwcIS4lHB4rLRgYJzomKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHjQsISw0NzQ0NjY0NDQ0NTE0NDQ0NDE2NDQ0NDQ0OjE0NDQ2NDQxNDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABwgFBgECBAP/xAA+EAACAQIDBQMKBQEIAwAAAAABAgADBAUGEQchMUFhEiJRExQjMkJScYGhwWJykbHRQxUkU3OCssLhM2OS/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAIDBQQBBv/EACwRAAIBBAEDAwMDBQAAAAAAAAABAgMEETFBEiFRBROBImGxQ3HwM0KRodH/2gAMAwEAAhEDEQA/AIwiIn05SIiIAiIgCIiAIiIAiIgCImfyxlK4xEO1EAKg9ZuDNyQdevKQnOMVmTwhgwETtXotTdqbqVdSVZTxBHEGdZ6BERJAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAERPpbWz1ai06alndgqqOJJkW0tgyOWsCqX9ytvS573bkia7yftLHYLhVOzoJb0V0RBp1J5k+JMxGRsrLh1uE3Gq+jVW8W04DoJtExLq4dWWFpFsVgjPank7y6G9tl9Ig9Io9tRz/ADCQsDLaESDdqOT/ADWobugvoajd9RwRz/xP7zosrj9OXwRlHkj6IiapAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEmfZVlDyNMX1wvpHHoweKIefRjNV2YZR87q+dV19DTbcDwdhoQOqjnJ1UaDQcpl3tx+nH5/4TjHk7T41q6pp2mA1IUanTUngB1narUCqWYgAAkk8ABx1kAbQc4NfXAWi5WjSbuaHTtMPb/icVGjKrLCJN4LBCea/skr02o1VDIwKsD4Gals4zeL+j5OqR5emAH/ABjkw+83eVyjKnLD2j3ZWnOOWnw65NJt6Nq1J/eXwPUTAyymb8tpiNsaL7nHeptzVhw+R5yuV/Zvb1Ho1VKuh7LA/bpNm1r+7HD2v5krksHwiInYREREAREQBERAEREAREQBERAEREAREQBERAEzGVcvviFytBNQvrVG5KgI1PxPATFW9B6lRaaKWd2Cqo4kncJYnI2V0w62CbjVfRqreLaDcOg0nJdXHtR7beiUVkzeF4eltSShRUKiAAD4ePWeyczUNoWaxh9vohBrVAVpr4eLEeAmLGMqksLbLNGp7WM38cPt3/zmB5e6CPrImnapUZ2LuxZmJLMeJJ4kzrN6hRVKGEVN5Pbg2KVLSulxRbR0PyYc1PQyyGW8cS+tkuKR9Yd5easOKmVim1ZAzU2HXPfJNCoQKg8PBx8OfSUXlv7keqO0exlgsVI62o5Q86pedUF9NTHeA9tBx+LDlJAo1VdQ6EFSAQRwIPAifQiZMJypyytk2slS5zJA2pZQ81qed0F0oue+BwpudP0Vtf1kfzfpVI1IKSKmsCIiWgREQBERAEREAREQBERAEREAREQBBibhs4ymb+47dQegpEFvB2BBCDdvHjK6lSMIuT0Esm47J8o+TQYhcL33B8kpHqofa0PM/tJTE+dNAoCqNABoAOAAnZ2AGpOgE+fq1JVJtstSweHGsTp2lB7iqdFQE9SeQHU8JW7MWN1L64a4qniSEXkia7lE2TaXmw3tfyFJvQUmIGnCo43FuO8DlNImrZ2/RHrlt/6ISlnsIiJ3kRODOYgErbJs3aEYdcP/AJDH9ShJ+kl0Sp1OoyMHRirKQVI3EEcCJYPZ9msYhb98gVqfdqL4+DDfwP7zHvbfpfXHT2WRfBsmJWKXFJqNVe0jDQiVvzXl98PuWt31K+tTb30/kcDLNzV89ZYXELUoABVTVqTeDe6T4HhKbWv7U8PTEo5K5xO9ei1N2R1KspKsp4gjjOk3CsRESQEREAREQBERAEREAREQBERAPZg+GPd10t6Q1dzp0Uc2PQSyeXcGp2VslvSG5RvPNmPFj1M1PZXlTzSh51WX01UAjUb0TiB0J4mSDMS7r+5LpWkWRWDiRptXzd5BPMaDekqL6Rgd6IdRp0Y6fpN0zRjC2VpUuWGvYXujxY+qP1lar+7evUetVYs7sWY9SddB0E9s6HXLqlpfkSeD4CIibRWIiIAiIgCZTLeOPYXKXNPfpudeToeIP2mLiQlFSWHoFpcJxKndUUr0W7SsNR08QeonvkG7JcyNQuRZOfR1iez+BwCd3RtJOUwK9J0p9PHBanlETbWspag4jQXeP/MoHEbgH3cxzkSS19eirqUcAqwIIPAg8RK6Z6y02HXRQA+SfvUm5ac1+InfY18rolvgjJcmtxETTICIiAIiIAiIgCIiAIiIAm37NMu+e3gd11pUdHbwLeyv3mnkyxOzrAxZ2CKw9JUHlHPPVt4HyGk47yt0QwtvsSiss2sLpwnacTmYhYR9tl1/s0acPK0+1+sguWXzlg/ntlVtx6xXVPzLvWVqqIUYo40ZSVYeBU6EfSa3p804OPKZCSOsRE0SAiIgCIiAIiIBlcr6+fW3Z4+VTT6yz8gLZRgjXN8tcjuUO+TyLMGCj7yfZjX805pLhFkV2E1rPWXxf2bUwO+vfpnmGXl8+E2WJxRk4yUlwSKmMpUlWGhBII5gjiJxN32rYF5re+VQaJXHaHgHHrD58ZpE+ipTU4KS5KWsMRESwCIiAIiIAiIgCIiAZfKeHedX1CgRuZwW/KveP7SzaroNBIG2P2/bxPt+5Tdv10X7yehMb1CWaiXhFkdHnxC5FKk9VuCKzn/SNftNQ2eZ0/tFHSrotZCToNwZCe6R8OBnq2nXnksLracXAQf6jv8AvIFwbE3tK6XFE6OhB6MOanoZ5b2yq0pPngOWGWokQ7VMlnVsRtV610A+JNQDx4ayScu40l7bJc0juYbxzVhxU/CZJ0DAgjUEaEHgQZzU6kqM8r5PWsoqcDE3zaVk02dQ3VBfQVG3gf02PL8p5TQ5vUqkakeqJU1gRES0CIiAJ7sGwmpeV0t6C6ux48lHNm6CeW2t3qutOmpZ3ICqOJJlg8h5RTDqPe0as41qP4eCr0E5bm4VKPbb0exWTKZYwCnYW60KQ6s3NmPEmZOvVVFLuQFUEkngAOJn1kS7W827jh1Bt5312HIbiE+fOY9OEq08cvZY3hGeydng399cUAAKaqGo+8QpIYn47jN9lcNnN4aWJ255OxQ/B1P/AFLHiWXVJU5pLWBF5Roe13DfK4c1QDvUWVwehOjfvIHlnM124qWNyh50X+ikj9pWJeE7fT5Zg14ZGS7nMRE0SAiIgCIiAIiIAiIgEjbE1/vlY/8ApH+4SbpBmxeppf1F96ifowk5CYV7/Wf7FkdEd7aXIsEHjWXX5AyEJPG2C0L4aWH9Oojn4bwf3kDzvsGva+SMtm47N81mwuPJ1D6CoQH8EYkAMPvLAU3DAMDqCAQeRBlTZLmynOQIXDrl943UHPMADuHqN+kqvbf++PyexlwShfWiVqbUqihkcFWB4EGV4zxlV8Or9njRck026e6eoljxMZj+DU72g1vWXVWG481bkw6icdvXdKX2eyTWSr8TKZiwKrYXDW9YcN6NydeTD+Ji5uRkpLK0VCANdw+U4kq7LMldoriF0m7jRU8/xsP2ldatGlHqZ6lkzWzPJXmiC6uVHlnHdU/01P8AyMkWBPBjOK07Sg1xWbRFHzJ5AdTMKc5VZZe2WLsYbPWZ1w+2Lg61X7tJfE7tT8BrrK7VqrVGZ6jFmYlmY8STxMymZceqX9w1xU3ckTki8gPvMTNm1oe1Hvt7K5SyZDL1Ts3luw4isn+6WjErJk+28riFsg51VJ+C7z+0s2Jx+otda/YlE8mLDW3qg/4b/wC0yqyy02O1Oza1m8KTn9FMqwvASz07UhI7RETRICIiSAiIgCIiAIiIBtmzK8FLE6Op0D9qn82G76iWIEqdQrNTdXQ6MjBlPUHUSzGVsaW9tadwh3kaMPdcbmB+cyPUKb6lP4JxfB6ccw9bm2q27cKiMvzI3H9dJWC8tWo1Ho1BoyMyMOqnSWukTbW8pMx/tG3XUgaVlHHQDc/y4GQsqyhPpen+T2SyRLOVcqQykggggjiCN4InWczYKid9m+cxfUxb12AuEXf+NRu7Q5a+Im+yqNldPRqJWpMVdGDKw8R9pYTI2bExGhruWqgAqJrz94fhMx7u26H1R1+C2Msn1zpldMRtzTbuuurU35q3h8DK8YhYvb1XoVk7LodGH3HiDLWTUs4ZJo4k1N3Yo6EdplG9l5qf55SNrde39MtCUckY7Nsmm9qC5rr/AHdDw/xGHLj6o5yd6aBQABoANABwAE+VlaJRprSpqFRAFUDkBPs7gAknQDifCVV60qs8vXCPUsHS5uFpo1SowVVBLMeAAlfM+5vbEa3Zpkigh7i+8ffbr4DlMptLzr525tLdvQIe+w/qMP8AiPrNAnfZ23Suue+CMpcCcTme3BsKqXddLeguruePJRzY9BO9yUVlkDfNjWCmpcPeMvdpjsIfF217X6D95NcxeXsHSytktqY3KN595jvZj8TrMnMCvV9yblwWpYRrW0O9FHDbhtd7J2B1L937yuAEk7bFmIVHSwptqEPbqEcO17K/LjIympY03Gnl8kJPuIiJ3ERERAEREAREQBERAE2nIebGw2v3tTRcgVF8Pxr1H1mrRITpxnFxloJ4LV2V4lamtWk4ZGAKsOBBn2dAwII1B3EHhK95IzrUw5+w+r0GPeTmuvtJ/EnjCcVpXVJa1Bw6nmOR8CORmFXoSpS+3DLU8kbZ42Z9otc4eNG4tR5HxKEncekiWtSamxSopVlOjKw0II5ES2M1TN+SaGIqWI7FYDu1FG/nuYe0N86La9cPpn3Xk8lHwV3nvwTF6lnXS4oNoyneOTLzVuhn2zDl6vYVPJ3CaDXuOPUceIP2mJmpmNSPlMr0Wgy9i6XlslynB11I90jiPlMrI62K1S1g6ngtdgPmqt95Is+fqw6JuK4ZatHBkUbWs2Mh/s+g2hK61mHHQ8EHhrzksGVnzvVL4ldMf8Uj5KAPtOiypqdTL4PJPsYITmcdPkOvwkj5L2aPcaV74FKfEU+Dv+b3R9Zr1KsKcctlaWTVcsZVuMRqdmiuiA9+ow7i8f8A6O7gJPGVsq0MOp9ikurEd+ofWY/YdBMvZWaUUWnSQKijQKBoJ6TMavdTq9tLwWKODiaZn/OS2FI06bA3DjRF90H2mnxz1n6nYqaNAh7gjTQb1Tq/XpILvbt69RqtVy7udWY8/wCBLLW0c31S1+RKWD51ajOxd2LMxJYniSeJM6xE2CsRESQEREAREQBERAEREAREQBMvlvMdfD6vlKDbjp20PqOOo5HrMREhKKksSXYFkcp5toYjT7VNuzUA79MnvKeniOs2KVSsrt6NRatFyjqdQynQ/wDY6SY8lbSkr9m3viEq7gtTgjncN/usd8ybizlD6o90WKWTfcUw2nc0mo10DIw3g/uDyMhTOmzurZ9qtahqlDeSBvdB194dZO6sCNROSNeM56NedJ9teD1rJHexZNLBzpxrv9FUfaSLPNZ2VOiCtJFQMSxCjQFjxM9MhUn1ycvISwJXTMeE1bnF7mhb0y7mry4AFV3seAEsXPLQsadN3dEVWc6uwA1Y9Tzk6FZ0m2g1k0zJWzulZaVrjSpX8fZT8o5nrN80nMxeOY3RsqZq3DhV5D2mPgo5mQlKVSWX3Y0ZB3CgliABvJO4D4mRNnraVr2rbD28Vaty+CfzNXzln2tiBNNNadD3Ae8/5yPhwmoTRt7LH1T34Iyl4OWYkkkkknUk7ySfEziImiQEREkBERAEREAREQBERAEREAREQBERAE4M5iAbtkzaFWsuzSr9qrQ3DQnV0H4SeI6SbcGxijd0xVt6iup8DvHQjkZVyZHBMbr2VQVbZyp9pfYceDLwM4LiyjP6odmSUsbLRxNKydn6hfgU30p1uaEjRuqnn8JumsyZwlB4ku5YczgzzX18lCmalZ1RFGpZjoJDedNpb3HaoWJZKe8NU4Ow/D7o+snRoTqvC/yeN4N1zntCo2QNKiRVr+6COyv5yP2kI4xi9a7qGtc1C7Hh7qjwUchPETrvJ1PMnifjE2aFtGkvv5K3LIiInSeCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAViCCCQRvBG4j4HlN/wAubUbi2pmlcJ5cAaI2ujjwDE+sPrNAiVVKUKixJBNozGY8y3GIP27ip3R6qLqEX5cz1Mw8RJRgorCXYCIiTAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIB//9k=",
        name: "ธนาคารกรุงเทพ",
    },
];

const TransferDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectOption, setSelectOption] = useState(null);
    const [selectLogo, setSelectLogo] = useState(null);
    
    const toggling = () => setIsOpen(!isOpen);

    const onOptionClicked = (image,value) => () => {
        setSelectLogo(image)
        setSelectOption(value);
        setIsOpen(false);
    }
    return (
        <div className="relative flex mx-2 w-auto ">
            <button onClick={toggling}
                className="p-2 flex border-2 min-h-14 border-gray-300 rounded-lg justify-between items-center w-full bg-white hover:bg-gray-200 duration-50 ">
                <div className="flex items-center gap-2">
                    <img
                        className="max-h-10 max-w-10 rounded-full"
                        src={selectLogo} />
                    <p className={`${isOpen ? 'text-black': 'text-slate-500'}`}>{selectOption || 'เลือกธนาคาร'}</p>
                </div>
                {!isOpen ? (
                    <MdKeyboardArrowDown className="text-2xl" />
                ) : (
                    <MdKeyboardArrowUp className="text-2xl" />
                )}
            </button>
            {isOpen &&
                <div className=" absolute bg-white top-16 w-full left-0 drop-shadow">
                    {Bank.map((item, index) => (
                        <button onClick={onOptionClicked(item.logo,item.name)}
                            className="flex p-2 justify-between items-center w-full bg-white hover:bg-orange-200 duration-100 rounded-md">
                            <div className="flex items-center gap-2">
                                <img
                                    className="h-10 w-10 rounded-full"
                                    src={item.logo} />
                                <p>{item.name}</p>
                            </div>
                        </button>
                    ))}
                </div>
            }
        </div>
    )
}
export default TransferDropdown;