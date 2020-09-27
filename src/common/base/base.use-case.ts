export abstract class BaseUseCase<TInput, TOutput> {
  async abstract activate(input: TInput): Promise<TOutput>
}