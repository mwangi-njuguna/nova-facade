/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
;
import { FragmentRefs } from "@graphitation/apollo-react-relay-duct-tape";
export type Example_feedbackFragment = {
    readonly id: string;
    readonly message: {
        readonly text: string;
    };
    readonly doesViewerLike: boolean;
    readonly " $refType": "Example_feedbackFragment";
};
export type Example_feedbackFragment$data = Example_feedbackFragment;
export type Example_feedbackFragment$key = {
    readonly " $data"?: Example_feedbackFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"Example_feedbackFragment">;
};
