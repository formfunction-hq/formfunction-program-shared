/**
 * Converts a uuid to string equal to the maximum size of a PDA seed (32 bytes).
 *
 * e.g. 8f281236-4668-4d92-b202-07998c0e -> 8f28123646684d92b20207998c0e
 *
 * This expects a standard format UUID as input.
 */
export default function convertUuidToPdaSeed(uuid: string): string {
  const result = uuid.replace(/-/g, "");

  if (result.length !== 32) {
    throw new Error(
      `Received invalid input in ${convertUuidToPdaSeed.name}: ${uuid}. Input should be a standard format UUID.`
    );
  }

  return result;
}
