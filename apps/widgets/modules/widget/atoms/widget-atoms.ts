import { atom } from "jotai";
import { atomFamily,atomWithStorage } from "jotai/utils";


export const conversationIdAtom=atom<string|null>(null);