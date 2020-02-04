import { feature, ipa_symbol, ipa_consonant, ipa_vowel, ipa_diacritic, ipa_letter, ipa_suprasegmental } from "./types";
export declare const place: {
    LABIAL: string;
    BILAB: string;
    LAB_DEN: string;
    CORONAL: string;
    INTER_DENT: string;
    DENTAL: string;
    ALV: string;
    PAL_ALV: string;
    RETROFLEX: string;
    DORSAL: string;
    PAL: string;
    VEL: string;
    UVU: string;
    PHAR: string;
    LARYN: string;
    EPIG: string;
    GLOTTAL: string;
};
export declare function is_dental(place: string): boolean;
export declare function is_coronal(place: string): boolean;
export declare function is_dorsal(place: string): boolean;
export declare function is_laryngeal(place: string): boolean;
export declare const manner: {
    STOP: string;
    NASAL: string;
    FRIC: string;
    LAT_FRIC: string;
    AFF: string;
    TRIL: string;
    TAP: string;
    APPROX: string;
    LAT: string;
};
export declare const features: {
    SYL: string;
    STRES: string;
    LONG: string;
    CONS: string;
    SON: string;
    CONT: string;
    DELREL: string;
    APPROX: string;
    TAP: string;
    TRIL: string;
    LAT: string;
    NASAL: string;
    VOICE: string;
    SP_GLOT: string;
    CON_GLOT: string;
    LABIAL: string;
    ROUND: string;
    LAB_DEN: string;
    CORONAL: string;
    ANT: string;
    DISTRO: string;
    STRID: string;
    DORSAL: string;
    HIGH: string;
    LOW: string;
    FRONT: string;
    BACK: string;
    TENSE: string;
};
export declare const glottal_stop: ipa_consonant;
export declare const high_front_tense_unround_vowel: ipa_vowel;
export declare const high_front_tense_round_vowel: ipa_vowel;
export declare const near_high_front_lax_unround_vowel: ipa_vowel;
export declare const near_high_front_lax_round_vowel: ipa_vowel;
export declare const high_mid_front_tense_unround_vowel: ipa_vowel;
export declare const high_mid_front_tense_round_vowel: ipa_vowel;
export declare const low_mid_front_unround_vowel: ipa_vowel;
export declare const low_mid_front_round_vowel: ipa_vowel;
export declare const near_low_front_unround_vowel: ipa_vowel;
export declare const low_front_unround_vowel: ipa_vowel;
export declare const low_front_round_vowel: ipa_vowel;
export declare const high_central_tense_unround_vowel: ipa_vowel;
export declare const high_central_tense_round_vowel: ipa_vowel;
export declare const schwa: ipa_vowel;
export declare const high_back_tense_unround_vowel: ipa_vowel;
export declare const high_back_tense_round_vowel: ipa_vowel;
export declare const near_high_back_lax_round_vowel: ipa_vowel;
export declare const high_mid_back_tense_unround_vowel: ipa_vowel;
export declare const high_mid_back_tense_round_vowel: ipa_vowel;
export declare const low_mid_back_lax_unround_vowel: ipa_vowel;
export declare const low_mid_back_lax_round_vowel: ipa_vowel;
export declare const low_back_unround_vowel: ipa_vowel;
export declare const low_back_round_vowel: ipa_vowel;
export declare const voiceless_bilabial_stop: ipa_consonant;
export declare const voiced_bilabial_stop: ipa_consonant;
export declare const voiced_bilabial_nasal: ipa_consonant;
export declare const voiceless_bilabial_nasal: ipa_consonant;
export declare const voiceless_bilabial_fricative: ipa_consonant;
export declare const voiced_bilabial_fricative: ipa_consonant;
export declare const voiced_bilabial_trill: ipa_consonant;
export declare const voiceless_bilabial_trill: ipa_consonant;
export declare const voiceless_labiodental_affricate: ipa_consonant;
export declare const voiced_labiodental_affricate: ipa_consonant;
export declare const voiced_labiodental_nasal: ipa_consonant;
export declare const voiceless_labiodental_fricative: ipa_consonant;
export declare const voiced_labiodental_fricative: ipa_consonant;
export declare const voiced_labiodental_approximant: ipa_consonant;
export declare const voiceless_alveolar_stop: ipa_consonant;
export declare const voiced_alveolar_stop: ipa_consonant;
export declare const voiceless_dental_stop: ipa_consonant;
export declare const voiced_dental_stop: ipa_consonant;
export declare const voiceless_dental_fricative: ipa_consonant;
export declare const voiced_dental_fricative: ipa_consonant;
export declare const voiced_alveolar_nasal: ipa_consonant;
export declare const voiceless_alveolar_affricate: ipa_consonant;
export declare const voiced_alveolar_affricate: ipa_consonant;
export declare const voiceless_alveolar_fricative: ipa_consonant;
export declare const voiced_alveolar_fricative: ipa_consonant;
export declare const voiceless_alveolar_lat_affricate: ipa_consonant;
export declare const voiced_alveolar_lat_affricate: ipa_consonant;
export declare const voiceless_alveolar_lat_fric: ipa_consonant;
export declare const voiced_alveolar_lat_fric: ipa_consonant;
export declare const voiced_alveolar_approx: ipa_consonant;
export declare const voiced_alveolar_trill: ipa_consonant;
export declare const voiced_alveolar_tap: ipa_consonant;
export declare const voiced_alveolar_lateral: ipa_consonant;
export declare const dark_l: ipa_consonant;
export declare const voiceless_pal_alv_affricate: ipa_consonant;
export declare const voiced_pal_alv_affricate: ipa_consonant;
export declare const voiceless_pal_alv_fricative: ipa_consonant;
export declare const voiced_pal_alv_fricative: {
    name: string;
    type: string;
    place: string;
    manner: string;
    consonant: boolean;
    vowel: boolean;
    ipa_sym: string;
    ipa_ent: string;
    branner: string;
    number: number;
    features: {
        SYL: feature;
        CONS: feature;
        SON: feature;
        CONT: feature;
        DELREL: feature;
        APPROX: feature;
        TAP: feature;
        TRIL: feature;
        LAT: feature;
        NASAL: feature;
        VOICE: feature;
        SP_GLOT: feature;
        CON_GLOT: feature;
        LABIAL: feature;
        ROUND: feature;
        LAB_DEN: feature;
        CORONAL: feature;
        ANT: feature;
        DISTRO: feature;
        STRID: feature;
        DORSAL: feature;
        HIGH: feature;
        LOW: feature;
        FRONT: feature;
        BACK: feature;
        TENSE: feature;
    };
};
export declare const voiceless_velar_stop: ipa_consonant;
export declare const voiced_velar_stop: ipa_consonant;
export declare const voiced_velar_nasal: ipa_consonant;
export declare const voiceless_uvular_stop: {
    name: string;
    type: string;
    place: string;
    manner: string;
    consonant: boolean;
    vowel: boolean;
    ipa_sym: string;
    ipa_ent: string;
    branner: string;
    number: number;
    features: {
        SYL: feature;
        CONS: feature;
        SON: feature;
        CONT: feature;
        DELREL: feature;
        APPROX: feature;
        TAP: feature;
        TRIL: feature;
        LAT: feature;
        NASAL: feature;
        VOICE: feature;
        SP_GLOT: feature;
        CON_GLOT: feature;
        LABIAL: feature;
        ROUND: feature;
        LAB_DEN: feature;
        CORONAL: feature;
        ANT: feature;
        DISTRO: feature;
        STRID: feature;
        DORSAL: feature;
        HIGH: feature;
        LOW: feature;
        FRONT: feature;
        BACK: feature;
        TENSE: feature;
    };
};
export declare const voiced_uvular_stop: {
    name: string;
    type: string;
    place: string;
    manner: string;
    consonant: boolean;
    vowel: boolean;
    ipa_sym: string;
    ipa_ent: string;
    branner: string;
    number: number;
    features: {
        SYL: feature;
        CONS: feature;
        SON: feature;
        CONT: feature;
        DELREL: feature;
        APPROX: feature;
        TAP: feature;
        TRIL: feature;
        LAT: feature;
        NASAL: feature;
        VOICE: feature;
        SP_GLOT: feature;
        CON_GLOT: feature;
        LABIAL: feature;
        ROUND: feature;
        LAB_DEN: feature;
        CORONAL: feature;
        ANT: feature;
        DISTRO: feature;
        STRID: feature;
        DORSAL: feature;
        HIGH: feature;
        LOW: feature;
        FRONT: feature;
        BACK: feature;
        TENSE: feature;
    };
};
export declare const voiced_uvular_nasal: ipa_consonant;
export declare const voiceless_glottal_fricative: ipa_consonant;
export declare const voiceless_velar_fricative: ipa_consonant;
export declare const voiced_velar_fricative: ipa_consonant;
export declare const voiced_phar_fricative: ipa_consonant;
export declare const syllable_break: ipa_suprasegmental;
export declare const primary_stress: ipa_suprasegmental;
export declare const secondary_stress: ipa_suprasegmental;
export declare const long: ipa_suprasegmental;
export declare const half_long: ipa_suprasegmental;
export declare const top_diacritic: ipa_diacritic;
export declare const high_diacritic: ipa_diacritic;
export declare const mid_diacritic: ipa_diacritic;
export declare const low_diacritic: ipa_diacritic;
export declare const bottom_diacritic: ipa_diacritic;
export declare const voiceless_diacritic: ipa_diacritic;
export declare const voiced_diacritic: ipa_diacritic;
export declare function get(key: string): ipa_symbol | undefined;
export declare function get_by_feature_string(key: string): (ipa_letter | undefined);
