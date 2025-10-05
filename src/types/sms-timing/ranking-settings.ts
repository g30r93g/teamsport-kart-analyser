export type SmsTimingRakingSettings = {
    resources: Array<{
        id: string; name: string; resourceKind?: number;
        scoregroups: Array<{ id: string; name: string }>;
    }>;
};
