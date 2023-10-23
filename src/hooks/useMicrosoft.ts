import axios from "axios";
import qs from "qs";

export const UseMicrosoft = () => {
    const RefreshToken = async () => {
        const response = await axios.request({
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://login.microsoftonline.com/common/oauth2/v2.0/token',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            data: qs.stringify({
                client_id: '9df29eb9-da96-415e-a571-3fed17de515f',
                client_secret: '.QL8Q~RIapLuk.sr.0Bj_vni0_rlDXDkaph2LcaY',
                redirect_uri: 'http://localhost:3000',
                refresh_token: 'M.C107_BAY.-CeD1*omBVjerObgCjDWMPUBTkZoC570R*T7iv9PLiaeu!Jhb!CknR*CL!e6bT1OjX6AaJUyVykGnfS2lMWNFjBr5tSJqNdfZI2CJrLq7zyO1pnB!0pAES64hgnjgAoMoG7xcJWrcyivclrJwVLQaJMg5fOhoIaa7bNHBFQ0KXx58p3Q08mI3yDO0Zd5VTwcwmI4c0peyLhc2fgm3xxMaxqLMSCehYRc9CsH31J7MPntRvzG7AIwxtaw*sTchNs*jmr5U6mYMnXJU97H0sYRSoOOqTpaycWyDvDrFJ84udB5PEe4vyiArPexqysm5Bh490gS27NXaSD*43!YoNpiQzk0R3XnpJ*jubU2tcdy6CeDy',
                grant_type: 'refresh_token'
            })
        })
        return response
    }

    return {
        RefreshToken
    }
}