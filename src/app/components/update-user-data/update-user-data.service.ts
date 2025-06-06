import { inject, Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DELETE_USER_MUTATION } from '../../../graphql/collections/mutations/detele-user.mutation';
import { UPDATE_USER_MUTATION } from '../../../graphql/collections/mutations/update-user.mutation';
import { GraphQLService } from '../../../graphql/graphql.service';

@Injectable({
  providedIn: 'root',
})
export class UpdateUserDataService {
  @Inject(GraphQLService)
  private readonly $graphql: GraphQLService = inject(GraphQLService);

  updateUser(variables: {
    id: string;
    name?: string;
    address?: string;
    photoUrl?: string;
    phone?: string;
  }): Observable<any> {
    return this.$graphql.mutate(UPDATE_USER_MUTATION, variables);
  }

  deleteUser({ id }: { id: string }): Observable<any> {
    return this.$graphql.mutate(DELETE_USER_MUTATION, { id });
  }
}
