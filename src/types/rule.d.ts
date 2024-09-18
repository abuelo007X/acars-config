/**
 * THIS FILE IS GENERATED BY HAND!
 */
import { PirepState } from '../defs'
import type { Pirep, Telemetry } from '../types'

/**
 * The return value from evaluating if a rule has been broken or not
 * Return it as a tuple.
 *
 * If a rule is passing/hasn't been violated:
 *  return [false]
 *
 * If a rule has been violated:
 *
 *  return [true, message, points ]
 *
 * points and message are optional - if omitted, they're pulled from
 * the 'meta' block
 */
export type RuleValue = [boolean, string?, number?]

/**
 *
 */
export interface Rule {
  meta: Meta

  /**
   * Run the evaluation data
   *
   * @param pirep
   * @param data
   * @param previousData
   */
  violated(pirep: Pirep, data: Telemetry, previousData?: Telemetry): RuleValue

  /**
   * Optional callback that runs after the evaluation is complete and the
   * rule was violated
   *
   * @param points The number of points that were deducted
   * @param count How many times this was violated
   * @param pirep
   * @param data
   */
  completed?(points: int, count: int, pirep: Pirep, data: Telemetry)
}

/**
 *
 */
export interface Meta {
  /**
   * A unique ID for this rule
   */
  id: string

  /**
   * A short name of the rule
   */
  name: string

  /**
   * If this rule is enabled or not
   */
  enabled: boolean

  /**
   * A detailed error message about the
   */
  message: string

  /**
   * General states this is active in
   */
  states?: PirepState[]

  /**
   * After being violated once, can it be violated again?
   */
  repeatable?: boolean

  /**
   * The amount of time, in seconds, between violations
   */
  cooldown?: number

  /**
   * The maximum number of violations
   */
  max_count?: number

  /**
   * The number of points that's substracted by default
   */
  points: number

  /**
   * This just allows any other properties
   */
  [others: string]: any
}
