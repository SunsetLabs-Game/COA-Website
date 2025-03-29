'use client';

import DigitalRainEffect from '@/components/effects/digital-rain-effect';
import KeyLeaders from '@/components/factions/keyLeaders';
import { ShadowProtocolProfile } from '@/components/factions/shadowProtocolProfile';

export default function ShadowProtocol() {
    return (
        <div className='min-h-screen'>
            <DigitalRainEffect />
            <ShadowProtocolProfile />
            <KeyLeaders />
        </div>
    );
}
