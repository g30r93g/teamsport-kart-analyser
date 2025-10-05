export type SmsTimingRankingSettings = {
    resources: Array<{
        id: string; name: string; resourceKind?: number;
        scoregroups?: Array<{ id: string; name: string }>;
        scoreGroups?: Array<{ id: string; name: string }>;
    }>;
};
